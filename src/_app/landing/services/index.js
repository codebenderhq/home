import postHtml from "npm:posthtml";
import customElements  from 'npm:posthtml-custom-elements'


/**
 * @name authService
 * This is a test function
 */

export default (props) => {
    console.log(props)
    document.getElementById('hello').innerHTML = props.sum   
   
}

export const onBuild = async () => {

//    const postHtml =  await import(`npm:posthtml`);
//    const customElements =  await import(`npm:posthtml-custom-elements`);
   
   const html = '<div>hello</div>'
   let res;
 
   await postHtml()
   .use(customElements())
   .process(html).then((result) => res = result.html)


    const sum = 1 + 1 + 1;
    return {sum, res}
}