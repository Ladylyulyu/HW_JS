// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке



let age_2 = 18;
let age_3 = 60; 
let age = prompt("Enter your age, please");
function checkAge(agePrompt) {
    age = Number(age);
    if (!isNaN(age)) {
                if (age < age_2) {
                    alert ("You don’t have access 'cause your age is " + age + ". It’s less thаn " + age_2);
                    }
                    else if (age >= age_2 && age < age_3) {
            
                        alert ("Welcome !")
                    }   
                    else if (age >= age_3){
            
                        alert ("Keep calm and look Culture channel")
                    }
                else {
                    alert ("Technical work")
                }        
            }
            else {
                alert ("Error! You've entered not a valid value")
            } 
          
          }

          checkAge()