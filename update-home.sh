#!/bin/bash

# First, let's try to access the admin to get a session
echo "Updating home page data via API..."

curl -X POST "http://localhost:3000/api/globals/home" \
  -H "Content-Type: application/json" \
  -d @homepage-data.json