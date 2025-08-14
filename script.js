const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const chunks = [];
	let current = [];
	let sum = 0;

	for (const num of arr) {
		if (num + sum <= n) {
			current.push(num);
			sum += num;
		}
		else {
			chunks.push(current);
		    current = [num]; 
		    sum = num;
		}
	}

	// if current is not empty push current to chunks
	 if (current.length) chunks.push(current);
	return chunks;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
