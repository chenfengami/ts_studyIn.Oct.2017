

//传递给一个函数的参数个数必须与函数期望的参数个数一致。

function buildName(firstName: string, lastName: string): string {
    return firstName + lastName;
}
let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right


// “？” 实现可选参数。

function buildName_a(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}

//可选参数必须放在必选参数里面

function buildName_b(firstName: string, lastName = "Smith") {  //在所有必须参数后面的带默认初始化的参数都是可选的
    //..
}

//共享同样的类型（firstName: string, lastName?: string）=> string


//与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。如果带默认值的参数出现在必须参数前面，用户必须明确的传入undefined值来获得默认值。

function buildName_c(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

let result4 = buildName_c('aa'); //error, too few parameters
let result5 = buildName_c('Bob', 'Adams', 'aaaa'); //erro, too many parameters
let result6 = buildName_c('Bob','cc'); //okay and return Bob cc
let result7 = buildName_c(undefined, 'Adams'); //okay and return Will Adams