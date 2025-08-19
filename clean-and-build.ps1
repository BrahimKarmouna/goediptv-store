# Stop any running Next.js processes
Get-Process -Name "node" -ErrorAction SilentlyContinue | Where-Object { $_.CommandLine -like "*next*" } | Stop-Process -Force

# Clean up
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "node_modules\.cache" -ErrorAction SilentlyContinue

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install

# Build the project
npm run build
