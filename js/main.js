function repeat(item, times) {
	let arr=[]
	for(let i=0;i<times;i++){
		arr.push(item)
	}
	return arr
}



function returnOnlyInteger(arr) {
	return arr.filter(a=>Number.isInteger(a))
}


function calcDeterminant(matrix) {
	let [a,b]=matrix
	
	return (a[0]*b[1])-(a[1]*b[0])
}



function acceptedWords(arr) {
	return arr.filter(a=>a[0]!="C")
}



function existsHigher(arr, n) {
	return arr.some(a=>a>=n)
}


function mysteryFunc(arr, num) {
	return arr.map(a=>a%num)
  }

  function filterDigitLength(arr, num) {
	return arr.filter(a=>a.toString().length==num)
}


function evenOddPartition(arr) {
	return [arr.filter(a=>a%2==0),arr.filter(a=>a%2!==0)]
}


// Fix this incorrect code, so that all tests pass!
function minusOne(arr) {
	let arr2=[...arr]
 arr2.pop()
	return arr2
}


function checkFactors(factors, num) {
	return factors.every(a=>num%a==0)
}


function getExtension(arr) {
	return arr.map(a=>a.slice(a.indexOf(".")+1))
}


function mean(nums) {
	return +(nums.reduce((a,n)=>a+n)/nums.length).toFixed(1)
}


function oddProduct(arr) {
	return arr.reduce((a,b)=>b%2!=0?a*b:a,1)
}


function minimumRemovals(arr) {
	return arr.reduce((a,b)=>a+b)%2==0?0:1
}



function middleEarth(arr) {
	return arr.indexOf("Frodo")+1==arr.indexOf("Sam")||arr.indexOf("Frodo")-1==arr.indexOf("Sam")
}



function findEvenNums(num) {
	let arr=[]
	for(let i=1;i<=num;i++)
		{
			if(i%2==0)
		arr.push(i)
		}
	return arr
}



function last(a, n) {
	return a.length<n?"invalid":a.slice(a.length-n)
}


function greetPeople(names) {
	return names.map(a=>"Hello "+a).join(", ")
}


function firstAndLast(s) {
	return [s.split("").sort().join(""),s.split("").sort().reverse().join("")]
}


function same(a1, a2) {
	return a1.filter((a,i)=>a1.indexOf(a)==i).length==a2.filter((a,i)=>a2.indexOf(a)==i).length
}




