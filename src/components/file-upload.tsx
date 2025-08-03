"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Upload,
  File,
  Image,
  Video,
  FileText,
  X,
  Check,
  AlertCircle
} from "lucide-react"

interface FileUploadProps {
  acceptedTypes?: string[]
  maxSize?: number // in MB
  multiple?: boolean
  onUpload?: (files: File[]) => void
  className?: string
}

interface UploadedFile {
  file: File
  progress: number
  status: 'uploading' | 'completed' | 'error'
  id: string
}

export function FileUpload({
  acceptedTypes = ['image/*', 'video/*', 'application/pdf'],
  maxSize = 10,
  multiple = true,
  onUpload,
  className = ""
}: FileUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <Image className="w-6 h-6 text-blue-500" />
    if (file.type.startsWith('video/')) return <Video className="w-6 h-6 text-purple-500" />
    if (file.type === 'application/pdf') return <FileText className="w-6 h-6 text-red-500" />
    return <File className="w-6 h-6 text-gray-500" />
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const validateFile = (file: File) => {
    if (file.size > maxSize * 1024 * 1024) {
      return `File size exceeds ${maxSize}MB limit`
    }

    const isValidType = acceptedTypes.some(type => {
      if (type.endsWith('/*')) {
        return file.type.startsWith(type.replace('/*', '/'))
      }
      return file.type === type
    })

    if (!isValidType) {
      return 'File type not supported'
    }

    return null
  }

  const simulateUpload = (fileId: string) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 30
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setUploadedFiles(prev =>
          prev.map(f => f.id === fileId ? { ...f, progress: 100, status: 'completed' } : f)
        )
      } else {
        setUploadedFiles(prev =>
          prev.map(f => f.id === fileId ? { ...f, progress } : f)
        )
      }
    }, 200)
  }

  const handleFiles = (files: File[]) => {
    const validFiles: File[] = []
    const newUploadedFiles: UploadedFile[] = []

    files.forEach(file => {
      const error = validateFile(file)
      if (error) {
        console.error(`${file.name}: ${error}`)
        return
      }

      validFiles.push(file)
      const fileId = Math.random().toString(36).substr(2, 9)
      newUploadedFiles.push({
        file,
        progress: 0,
        status: 'uploading',
        id: fileId
      })
    })

    if (newUploadedFiles.length > 0) {
      setUploadedFiles(prev => [...prev, ...newUploadedFiles])
      newUploadedFiles.forEach(uploadedFile => {
        simulateUpload(uploadedFile.id)
      })

      if (onUpload) {
        onUpload(validFiles)
      }
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    handleFiles(files)
  }

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId))
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
          isDragOver
            ? 'border-violet-500 bg-violet-50'
            : 'border-gray-300 hover:border-violet-400'
        }`}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragOver(true)
        }}
        onDragLeave={() => setIsDragOver(false)}
        onClick={handleFileSelect}
      >
        <Upload className={`w-12 h-12 mx-auto mb-4 ${isDragOver ? 'text-violet-500' : 'text-gray-400'}`} />
        <h3 className="text-lg font-semibold mb-2">
          {isDragOver ? 'Drop files here' : 'Upload course materials'}
        </h3>
        <p className="text-gray-600 mb-4">
          Drag and drop your files here, or click to browse
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <Badge variant="secondary">Images</Badge>
          <Badge variant="secondary">Videos</Badge>
          <Badge variant="secondary">PDFs</Badge>
        </div>
        <Button
          type="button"
          className="bg-violet-600 hover:bg-violet-700"
          onClick={(e) => {
            e.stopPropagation()
            handleFileSelect()
          }}
        >
          <Upload className="w-4 h-4 mr-2" />
          Choose Files
        </Button>
        <p className="text-sm text-gray-500 mt-2">
          Max {maxSize}MB per file
        </p>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple={multiple}
        accept={acceptedTypes.join(',')}
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-semibold">Uploaded Files</h4>
          {uploadedFiles.map((uploadedFile) => (
            <Card key={uploadedFile.id} className="p-4">
              <div className="flex items-center space-x-3">
                {getFileIcon(uploadedFile.file)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {uploadedFile.file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(uploadedFile.file.size)}
                  </p>
                  {uploadedFile.status === 'uploading' && (
                    <div className="mt-2">
                      <Progress value={uploadedFile.progress} className="w-full h-2" />
                      <p className="text-xs text-gray-500 mt-1">
                        {Math.round(uploadedFile.progress)}% uploaded
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {uploadedFile.status === 'completed' && (
                    <Check className="w-5 h-5 text-green-500" />
                  )}
                  {uploadedFile.status === 'error' && (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeFile(uploadedFile.id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
