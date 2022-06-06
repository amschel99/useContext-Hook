useContext hook solves the problem called prop drill.


lets assume you had a parent component and 10 child components.


If you wanted to share a state from the parent component with the 10th child component, you'd have to pass the state down from child to child through props.


This is kinda redudant because other child components access the state but they are not using it.


Thats the problem useContext hook solves.
