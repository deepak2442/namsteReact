assignment-4
1	is JSX mandatory:-->
-	JSX is an extension syntax that allows writing HTML and JS to write React Element
-	its not but recommended because this is easy and better way of writing clean code  
-	simple js , html can also be used

2	ES6-->
-	its highly recommendable but not mendatory 
-	its the standard way of writing with standardization of JS for making code readable and more accessible
-	without ES6 we can use create-react-class instead

3	calling components in JSX:-->
-	{TitleComponent}:-->this value describes it as a JS expression or variable or react element
-	<TitleComponent/>:-->it represents a component which is returning some JSX values
-	<TitleComponent><TitleComponent/>it is almost like <TitleComponent/> but with opening and closing tags we can write child component between them.

4	Comments in JSX:-->
-	{/* */} for single or multiline comments
-	e.g {/* this is config driven UI*}

5	<React.fragment><React.fragment/>or <></>:-->
-	as we have alot of elements in div in react to hold multiple components in return we can use this
-	<></> this is short hand version with only one difference as it cant handle key attribute

6	Virtual DOM:-->
-	its light weight abstraction of DOM 
-	its like a copy of DOM which can be updated without affecting the actual DOM
-	it is like a blueprint of a machine, so changes made in blueprint wont apply to machine
-	REConcilliation is the process to compare and keep Real and Virtual DOM in sync
-	no memory wastage in it
-	it updates faster
-	it cant update HTML directly 
-	it produces virtual DOM nodes per event or 200k per second

7	Reconciliation:-->
-	it is process through which React updates the Browser DOM and make React work faster
-	React use diffing algo to predict component updates faster
-	React first calculate the difference between DOM and Virtual DOM ,if updates is there React stores the copy of Virtual DOM

8	React Fiber:-->
-	its  a ReactJS concept to render a system faster, smoother and smarter
-	FIBER RECONCELIER which become the default reconciler for React 16  and above
-	its a complete rewrite of react’s reconciliation algo to solve long standing issues
-	as Fiber is async react can :
-	pause, resume and restart rendering work on components as new updates comes
-	reuse previously completed work or abort it if not required
-	split work into chunks and prioritize task based on importance
-	Keys in React:-->
-	a special attribute which help in rendering the updated /changed/deleted component
-	it uniquely identifies the elements in list so that only required components can be reloaded instead of every component
-	Index as Key:-->
-	we can use but its not a good practice ,if no key is there we can but key is highly recommandable
	it can negatively impact the performance and may cause issues with components states
-	keys are taken from each object in list which is being rendered 
-	in case of index it might render the data in unusual order

9	Props in React:-->
-	passing the properties as arguments into components to reuse the same component with different values to reuse it or to make it dynamic
-	we can pass individual like name color etc or whole data like in object or list from as well

10	Config driven UI:-->
-	it is good practice to use it to make application for dynamic
-	it is based on configurations of data application receives
-	its a very common and basic practice to intercat with users
-	it save development time and efforts
-	when data comes from backend or driven using config
-	eg. most of the websites show data per city or country so its not designed separately just config driven Ui is used
