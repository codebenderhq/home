import postHtml from "npm:posthtml";
import customElements  from 'npm:posthtml-custom-elements'


/**
 * @name iyoh service
 * This is a test function
 */

export default (props) => {
    console.log(props.onServerResult.param)
    
    document.getElementById('hello').innerHTML = props.onServerResult.param
   
}

export const onServer = async (prop) => {
    
    console.log(prop.path)
    return prop
}


export const onBuild = async () => {

//    const postHtml =  await import(`npm:posthtml`);
//    const customElements =  await import(`npm:posthtml-custom-elements`);

   
   const html = '<div>hello</div>'
   const params  = {}
   let res;
 
   await postHtml()
   .use(customElements())
   .process(html).then((result) => res = result.html)


    const sum = 1 + 1 + 1 + 1;
    return {sum, res,params}
}


