var users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];
  

// Write a function called printEmails which console.log's each email for the users.
function printEmails(){
    users.forEach((el) => {
        console.log(el.email);
    });
};

// printEmails();


// Write a function called printHobbies which console.log's each hobby for each user.
function printHobbies(){
    users.map((el) => {
        return el.hobbies.forEach((hobby) => {
            console.log(hobby);
        })
    });
};

// printHobbies();


// Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in
function findHometownByState(state){
    var myUser = users.filter((user) => {
        return user.hometown.state == state;
    });
    return myUser[0];
};

var theUser = findHometownByState('CA');
// console.log(theUser);


// Write a function called allLanguages which returns an array of all of the unique value

function allLanguages(){
    let myLangs = [];
    users.map((el) => {
        return el.favoriteLanguages.forEach((lang) => {
            myLangs.push(lang);
        })
    });
    let modLangs = myLangs.filter((val, index, array) => {
        return array.indexOf(val) === index;
    });
    return modLangs;
};

var languages = allLanguages();
// console.log(languages)



// Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in

function hasFavoriteEditor(editor){
    var favEditor = users.map((val) => {
        return val.favoriteEditor;
    });
    var checker = favEditor.some((ed) => {
        return ed.toLowerCase() == editor.toLowerCase();
    });;
    return checker;
};

var editor = hasFavoriteEditor('vim');
// console.log(editor);


// Write a function called findByUsername which takes in a string and returns an object in the users array that has that username

function findByUsername(str){
    var theUser = users.filter((user) => {
        return user.username.toLowerCase() === str.toLowerCase();
    });
    return theUser;
};

var searchedUser = findByUsername('anne');
// console.log(searchedUser);




// PART 2

// Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the 
// value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).

function vowelCount(str){
    var transformedStr = str.split("");
    let returnedObj = {};
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    returnedObj = transformedStr.reduce((acc, next, index) => {
        if(vowels.indexOf(next) > -1){
            acc[next] = (acc[next] || 0) + 1;
        }
        return acc;
    }, {});
    return returnedObj;
}

var vowels = vowelCount('incredible');
console.log(vowels);


// Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel 
// (y should not count as a vowel for this function).

function removeVowels(str){
    var transformedStr = str.split("");
    let returnedArr = [];
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    transformedStr.reduce((acc, next, index) => {
        if(vowels.indexOf(next) == -1){
            returnedArr.push(next);
        }
    }, []);
    return returnedArr;
}

var consonants = removeVowels('silly');
console.log(consonants);