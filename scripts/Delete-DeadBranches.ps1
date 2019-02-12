git fetch origin -p --quiet

$localBranches = git branch -vv
$branchesToDelete = @()

ForEach ($branch in $localBranches) {
  if ($branch -match ": gone]") {
    $branchesToDelete += $branch
  }
}

ForEach ($branch in $branchesToDelete) {
  $elements = $branch.Split(" ")

  Write-Host Deleting Branch: -NoNewLine -ForegroundColor red
  Write-Host $elements[2]

  Write-Host (git branch -D $elements[2]) -ForegroundColor green
}
