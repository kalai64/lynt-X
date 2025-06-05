"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Minus,
  Plus,
  RotateCw,
} from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";
import Tesseract from "tesseract.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";

export default function ImageViewer({
  batches,
  selectedBatch,
  setSelectedBatch,
  selectedImage,
  setSelectedImage,
}) {
  const pathname = usePathname();
  const baseUrl = "https://v0-react-form-builder-cyan.vercel.app";
  const pdfUrl = selectedImage ? baseUrl + selectedImage.image : null;
  const [extractedText, setExtractedText] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);
  const [mergedImage, setMergedImage] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectionBox, setSelectionBox] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const canvasRef = useRef(null);
  const textLayerRef = useRef(null);
  const textareaRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  // Function to handle copying text to clipboard
  const handleCopyText = async () => {
    if (selectedText) {
      try {
        await navigator.clipboard.writeText(selectedText);
        setIsCopied(true); // Show "Copied" message
        setTimeout(() => setIsCopied(false), 2000); // Revert to copy icon after 2 seconds
      } catch (error) {
        console.error("Failed to copy text:", error);
      }
    }
  };

  // Reset mergedImage and selectedImage when batch changes
  useEffect(() => {
    setMergedImage(null);
    setSelectedImage(null);
  }, [selectedBatch, setSelectedImage]);

  const convertPdfToSingleImage = async (pdfUrl) => {
    if (!pdfUrl) return;
    setLoadingImage(true);
    try {
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      let totalWidth = 0;
      let totalHeight = 0;
      const imageElements = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: context, viewport }).promise;
        const imageData = canvas.toDataURL("image/png");
        const img = new Image();
        img.src = imageData;
        await new Promise((resolve) => (img.onload = resolve));
        imageElements.push(img);
        totalWidth = Math.max(totalWidth, img.width);
        totalHeight += img.height;
      }

      const finalCanvas = document.createElement("canvas");
      const finalContext = finalCanvas.getContext("2d");
      finalCanvas.width = totalWidth;
      finalCanvas.height = totalHeight;
      let yOffset = 0;
      for (const img of imageElements) {
        finalContext.drawImage(img, 0, yOffset, img.width, img.height);
        yOffset += img.height;
      }
      const mergedImageData = finalCanvas.toDataURL("image/png");
      setMergedImage(mergedImageData);
    } catch (error) {
      console.error("Error converting PDF to image:", error);
    } finally {
      setLoadingImage(false);
    }
  };

  const drawImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !mergedImage) return;

    const imageObj = new Image();
    imageObj.src = mergedImage;
    imageObj.onload = () => {
      canvas.width = imageObj.width;
      canvas.height = imageObj.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.scale(scale, scale);
      ctx.drawImage(imageObj, -imageObj.width / 2, -imageObj.height / 2);
      ctx.restore();
    };
  };

  const startSelection = (event) => {
    setIsSelecting(true);
    const rect = canvasRef.current.getBoundingClientRect();
    setSelectionBox({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      width: 0,
      height: 0,
    });
  };

  const moveSelection = (event) => {
    if (!isSelecting) return;
    const rect = canvasRef.current.getBoundingClientRect();
    setSelectionBox((prev) => ({
      ...prev,
      width: event.clientX - rect.left - prev.x,
      height: event.clientY - rect.top - prev.y,
    }));
  };

  const endSelection = async () => {
    setIsSelecting(false);
    if (selectionBox.width === 0 || selectionBox.height === 0) return;

    const canvas = canvasRef.current;
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    const scaleX = canvas.width / canvas.clientWidth;
    const scaleY = canvas.height / canvas.clientHeight;
    tempCanvas.width = selectionBox.width * scaleX;
    tempCanvas.height = selectionBox.height * scaleY;
    tempCtx.drawImage(
      canvas,
      selectionBox.x * scaleX,
      selectionBox.y * scaleY,
      selectionBox.width * scaleX,
      selectionBox.height * scaleY,
      0,
      0,
      tempCanvas.width,
      tempCanvas.height
    );
    const selectedImage = tempCanvas.toDataURL("image/png");

    try {
      const {
        data: { text },
      } = await Tesseract.recognize(selectedImage, "eng");
      setSelectedText(text.trim());
      if (textareaRef.current) {
        textareaRef.current.value = text.trim();
      }
      setExtractedText(text.trim());
    } catch (error) {
      console.error("OCR Extraction Error:", error);
    }
  };

  const zoomIn = () => {
    setScale((prev) => prev * 1.1);
  };

  const zoomOut = () => {
    setScale((prev) => prev / 1.1);
  };

  const rotateClockwise = () => {
    setRotation((prev) => prev + 90);
  };

  useEffect(() => {
    if (pdfUrl) {
      convertPdfToSingleImage(pdfUrl);
    } else {
      setMergedImage(null); // Clear mergedImage when no pdfUrl
    }
  }, [pdfUrl]);

  useEffect(() => {
    drawImage();
  }, [mergedImage, scale, rotation]);

  return (
    <div className="w-1/2 border-r p-2 flex flex-col">
      <div className="flex items-center justify-between mb-6 px-2 py-1">
        {pathname === "/qc-client" ? (
          <div className="flex gap-2">
            <Select
              value={selectedBatch?.id?.toString() || ""}
              onValueChange={(value) => {
                const batch = batches.find((b) => b.id.toString() === value);
                setSelectedBatch(batch);
                setSelectedImage(null); // Ensure image is reset
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Batch" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Batches</SelectLabel>
                  {batches?.map((batch) => (
                    <SelectItem key={batch.id} value={batch.id.toString()}>
                      {batch.batchname}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select
              value={selectedImage?.image || ""}
              onValueChange={(value) => {
                const image = selectedBatch?.imagecollection.find(
                  (img) => img.image === value
                );
                setSelectedImage(image || null);
              }}
              disabled={!selectedBatch} // Disable image selection if no batch is selected
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Image" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Images</SelectLabel>
                  {selectedBatch?.imagecollection?.map((img) => (
                    <SelectItem key={img.id} value={img.image}>
                      {img.filename}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        ) : (
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Page 01" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="page-1">Page 01</SelectItem>
              <SelectItem value="page-2">Page 02</SelectItem>
            </SelectContent>
          </Select>
        )}

        <div className="flex items-center justify-between gap-1 mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={zoomIn}
            className="h-9 w-9"
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={zoomOut}
            className="h-9 w-9"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={rotateClockwise}
            className="h-9 w-9"
          >
            <RotateCw className="h-2 w-2" />
          </Button>
        </div>
      </div>

      <div className="relative border bg-gray-100 rounded shadow h-[60vh] overflow-y-auto no-scrollbar">
        {loadingImage ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50">
            <svg
              className="animate-spin h-10 w-10 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : mergedImage ? (
          <>
            <canvas
              ref={canvasRef}
              className="w-full h-auto object-contain"
              onMouseDown={startSelection}
              onMouseMove={moveSelection}
              onMouseUp={endSelection}
            />
            {isSelecting && (
              <div
                ref={textLayerRef}
                className="absolute pointer-events-none border-2 border-red-500"
                style={{
                  left: `${selectionBox.x}px`,
                  top: `${selectionBox.y}px`,
                  width: `${selectionBox.width}px`,
                  height: `${selectionBox.height}px`,
                }}
              />
            )}
          </>
        ) : (
          <div className="text-gray-500 text-center p-4">
            No image available to display.
          </div>
        )}
      </div>

      <div className="mt-4 rounded p-1">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">Extracted Text -</h4>
          <button
            className="text-gray-600 cursor-pointer hover:text-gray-800"
            onClick={handleCopyText}
            title="Copy text"
          >
            {isCopied ? (
              <span className="text-sm text-green-600">Copied</span>
            ) : (
              <Copy size={18} />
            )}
          </button>
        </div>
        <div className="relative">
          <textarea
            ref={textareaRef}
            className="w-full border mt-2 rounded bg-white"
            rows="4"
            placeholder="Selected text will appear here..."
            value={selectedText}
            onChange={(e) => setSelectedText(e.target.value)}
          />
          {selectedText && (
            <button
              className="absolute right-2 bottom-2 p-1.5 text-gray-400 hover:text-gray-600"
              onClick={() => setSelectedText("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
