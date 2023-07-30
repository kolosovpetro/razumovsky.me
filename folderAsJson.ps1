param(
  [Parameter(Mandatory = $true, Position = 0)]
  [string] $pathToFolder,
  [Parameter(Mandatory = $true, Position = 1)]
  [string] $baseHref
)

$selectDir = dir $pathToFolder | Select-Object -Property Name, Extension, @{Name="Size";Expression={[int][Math]::Floor($_.Length/1KB)}}, @{Name="Path";Expression={$baseHref+$_.Name}};
return $selectDir | ConvertTo-Json

#$pathToFolder="./src/assets/pdf";
#$baseHref="https://quetly3301.github.io/assets/pdf/";
#$json = .\folderAsJson -pathToFolder $pathToFolder -baseHref $baseHref;
#$json | Out-File -FilePath "$pathToFolder/DirectoryList.json";
