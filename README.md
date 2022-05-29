# web3react-demo
Created with CodeSandbox

# 说明
路由参考
https://codesandbox.io/s/basic-chakra-ui-setup-with-react-router-po6q5?file=/package.json
美化参考 
https://chakra-templates.dev/navigation/navbar



# 过程问题记录

react路由更新 页面不更新？
把路由文件的默认页面放在最下面就可以解决问题了
<Route path="/"  component={Home}></Route>