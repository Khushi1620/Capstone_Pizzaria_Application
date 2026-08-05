If someone asks:

"Why did you use Redux?"

You can answer:

"Redux provides centralized state management. It makes state predictable and is easier to scale for larger applications."

If they ask:

"Why didn't you use Context API?"

You can say:

"Context API is suitable for smaller applications, but Redux offers better scalability and developer tooling for applications with more complex state."

// LOCAL STORAGE THEORY
// localStorage only stores string that's why we use .stringify method to convert object into string
    // example -> '{"name":"Khushi","email":"khushi@gmail.com"}'
    // object -> string (stringify) strinng -> object (parse)
// localStrorage does not store anything except string because if it stores it must know the programming things like object, array etc by this actual work of the localStorage will be disappear
// when storing
// Object
//    │
//    │ JSON.stringify()
//    ▼
// String
//    │
//    │ localStorage
//    ▼
// Browser

// When reading:

// Browser
//    │
//    ▼
// String
//    │
//    │ JSON.parse()
//    ▼
// Object

USENAVIGATE AND NAVIGATE
hook                        component
we call via buttons         automatically calls
non protected               protected