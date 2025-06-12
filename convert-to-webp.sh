#!/bin/bash

# Bulk Image to WebP converter script
# Converts PNG, JPG, and JPEG files to WebP format
# Usage: ./convert_images_to_webp.sh

INPUT_FOLDER="./src/images"
QUALITY=100

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp is not installed. Please install libwebp-tools"
    echo "Ubuntu/Debian: sudo apt install webp"
    echo "macOS: brew install webp"
    exit 1
fi

# Check if input folder exists
if [ ! -d "$INPUT_FOLDER" ]; then
    echo "Error: Input folder '$INPUT_FOLDER' does not exist"
    exit 1
fi

echo "Starting bulk conversion of PNG, JPG, and JPEG files to WebP..."
echo "Input folder: $INPUT_FOLDER"
echo "Quality: $QUALITY"
echo ""

# Counter for processed files
count=0
success=0
failed=0

# Function to convert a single file
convert_file() {
    local input_file="$1"
    local dir=$(dirname "$input_file")
    local filename_with_ext=$(basename "$input_file")
    local filename="${filename_with_ext%.*}"
    
    # Create output filename
    local webp_file="$dir/$filename.webp"
    
    echo "Converting: $input_file"
    
    # Convert to WebP
    if cwebp -q "$QUALITY" "$input_file" -o "$webp_file"; then
        echo "✓ Success: $webp_file"
        ((success++))
    else
        echo "✗ Failed: $input_file"
        ((failed++))
    fi
    
    ((count++))
    echo ""
}

# Find and convert PNG files
find "$INPUT_FOLDER" -type f -iname "*.png" | while read -r file; do
    convert_file "$file"
done

# Find and convert JPG files
find "$INPUT_FOLDER" -type f -iname "*.jpg" | while read -r file; do
    convert_file "$file"
done

# Find and convert JPEG files
find "$INPUT_FOLDER" -type f -iname "*.jpeg" | while read -r file; do
    convert_file "$file"
done

echo "Conversion completed!"
echo "Total files processed: $count"
echo "Successful conversions: $success"
echo "Failed conversions: $failed"