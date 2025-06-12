#!/bin/bash

# Replace image file extensions in text files
# Changes .png and .jpg/.jpeg references to .webp in file contents
# Usage: ./replace_image_extensions.sh

INPUT_FOLDER="./src/components/"
# File types to search in (add more as needed)
FILE_TYPES="*.html *.htm *.css *.js *.jsx *.ts *.tsx *.md *.txt *.xml *.json *.php *.py *.rb *.go *.java *.cpp *.c *.vue *.svelte"

# Check if input folder exists
if [ ! -d "$INPUT_FOLDER" ]; then
    echo "Error: Input folder '$INPUT_FOLDER' does not exist"
    exit 1
fi

echo "Starting replacement of image extensions in text files..."
echo "Input folder: $INPUT_FOLDER"
echo "Replacing .png, .jpg, .jpeg with .webp in file contents"
echo ""

# Counter for processed files
files_processed=0
files_modified=0
total_replacements=0

# Function to process a single file
process_file() {
    local file="$1"
    local temp_file="${file}.tmp"
    local replacements=0
    
    echo "Processing: $file"
    
    # Use sed to replace extensions (case-insensitive)
    # This handles common patterns like src="image.jpg", url(image.png), etc.
    sed -E '
        s/\.png(["'\'')\s>])/\.webp\1/gi
        s/\.jpg(["'\'')\s>])/\.webp\1/gi
        s/\.jpeg(["'\'')\s>])/\.webp\1/gi
    ' "$file" > "$temp_file"
    
    # Check if any changes were made
    if ! cmp -s "$file" "$temp_file"; then
        # Count the number of replacements made
        local png_count=$(grep -ci '\.png' "$file" || true)
        local jpg_count=$(grep -ci '\.jpg' "$file" || true)
        local jpeg_count=$(grep -ci '\.jpeg' "$file" || true)
        local webp_count_before=$(grep -ci '\.webp' "$file" || true)
        local webp_count_after=$(grep -ci '\.webp' "$temp_file" || true)
        
        replacements=$((webp_count_after - webp_count_before))
        
        # Replace the original file
        mv "$temp_file" "$file"
        echo "✓ Modified: $replacements replacements made"
        ((files_modified++))
        ((total_replacements += replacements))
    else
        # No changes made
        rm "$temp_file"
        echo "- No changes needed"
    fi
    
    ((files_processed++))
    echo ""
}

# Find and process all specified file types
for file_type in $FILE_TYPES; do
    while IFS= read -r -d '' file; do
        process_file "$file"
    done < <(find "$INPUT_FOLDER" -type f -iname "$file_type" -print0 2>/dev/null)
done

echo "Processing completed!"
echo "Total files processed: $files_processed"
echo "Files modified: $files_modified"
echo "Total replacements made: $total_replacements"
echo ""
echo "Note: This script replaces extensions in common contexts like:"
echo "  - src=\"image.jpg\" → src=\"image.webp\""
echo "  - url(image.png) → url(image.webp)"
echo "  - href='image.jpeg' → href='image.webp'"