# Passing Handlers through props to multiple childrens
We are suppose to create a Child component that take a handler from parent and evoke it when child component's top most element is clicked(div).

## Details
- We have created App.js which has a function called changeColor.
- App.js also have three button which changes the currentBackground state.
- changeColor function will accpet one parameter called childStyleHandler.
- When childStyleHandled will be evoked by parent with some css properties.
- Child.js should accept changeColor as props and evoke it when a click event is performed on div.
- This div on which click event is performed should have class "fix-box".
- Add a h2 tag to this div having text "Children" and class "subheading".
- Export the child component by default.
- Initial value of background of main div tag(fix-box) of child component should be empty ==> {background :''}

## Acceptance criteria
- When fix-box is selected then its properties should be changed according to currentBackground.
- Switching color using different given buttons should fill the div(fix-box) with respective color.
- Switching the color should not affect or cause undesireable result.(like changing of all the other fix-box divs).  

