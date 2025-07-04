  // Declare a variable 'numNeighbours' 
// 1)based on a prompt input like this:prompt('How many neighbour countries does  your country have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality== for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of'numNeighbours'.
//  Notice what happens when there is exactly 1 border! Why is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this situation
<!DOCTYPE html>
<html>
<head>
  <title>Neighbour Check</title>
</head>
<body>

<script>
  let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

  if (numNeighbours === 1)
  {
    console.log("Only 1 border!");
  } 
  else if (numNeighbours > 1) 
  {
    console.log("More than 1 border");
  } 
  else 
  {
    console.log("No borders");
  }
/ Step 5: You can test this by entering different values (0, 1, 2, etc.)

  // Step 6: If we had used == instead of ===, '1' == 1 would be true
  // But === is better because it checks both value and type

  // Step 7: We used Number() to convert input from string to number

  // Step 8: Why use === and type conversion?
  console.log("\nWhy use === and type conversion?");
  console.log("Because prompt() gives string input.");
  console.log("Using === ensures both value and type match.");
  console.log("Type conversion helps avoid bugs with string/number mix.");
</script>
</body>
</html>
