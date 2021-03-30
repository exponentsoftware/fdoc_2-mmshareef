
const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];

    // function add new uder
    function addNewUser(){
			 users.forEach(user => {
			// check if user already exists
		    // add user if user doesnt already existsfunction addNewUser(){
            if(user.name !== 'kcr'){
                users.name = "kcr",
                users.scores = 36,
                users.skills= ['php','JS'],
                users.age = 89
            }
        });
        console.log(users);
    }
addNewUser(users);

function addNewSkill(){
        users.forEach(user => {
            if(user.name === 'Martha'){ user.skills[2] = 'singing'}
        });
        console.log(users)
    }
 addNewSkill(users)