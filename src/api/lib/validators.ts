interface inputType {
  email: string;
  password: string;
  name: string;
  [index: string]: string | number;
}

// typescript function definition
const validateInput = (inputBody: inputType): object => {
  return { name: "sujan" };
};

const input = validateInput({
  email: "sujan@gmail.com",
  password: "12345",
  name: "sujan",
  platform: "android",
});

console.log(input);
