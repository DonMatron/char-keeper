@echo off

set desiredFolder=char-keeper

:: Get folder name from the path
for %%F in ("%CD%") do set "folderName=%%~nxF"

:: Print the folder name
echo Script is being run from folder: %folderName%

:: Check if it's the correct folder
if /I "%folderName%"=="%desiredFolder%" (
    echo Correct folder. Proceeding with the script...
) else (
    color 04
    echo ERROR: Script must be run only from the '%desiredFolder%' directory.
    pause
)

echo DOTNET files copy started.

:: Set source and destination folders
set source="%CD%\output\tauri\Release\dotnet"
set destination="%CD%\src-tauri\dotnet"

:: Delete all files in the destination folder
del /Q "%destination%\*.*"

:: Delete all subdirectories in the destination folder
for /d %%x in ("%destination%\*") do rd /s /q "%%x"

:: Copy folder contents
xcopy %source% %destination% /E /H /C /I

:: Exit script
echo DOTNET files copy completed.
exit