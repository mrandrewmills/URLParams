# URLParams
A JavaScript (ES6) class for managing URL parameters, adding easily to links, etc.

After adding this class to your project, you can use the following methods to manage URL parameters and easily add them to URLs.

Creating an instance

```javascript
test = new URLParam();
```

Adding a parameter
```javascript
test.addParam("utm_source", "Facebook");
```
Removing a parameter
```javascript
test.removeParam("utm_source");
```
Adding and then modifying a previously existing parameter
```javascript
test.addParam("utm_content", "logolink");
test.addParam("utm_content", "textlink");
```
Let's see how it handles adding parameters to URLs we provide:
```javascript
test.addToLink("https://mrandrewmills.com");
// returns "https://mrandrewmills.com/?utm_content=textlink&utm_source=Facebook"

test.addToLink("https://mrandrewmills.com?s=WordPress");
// returns 
"https://mrandrewmills.com/?s=WordPress&utm_content=textlink&utm_source=Facebook"
```

Just to be clear, this isn't limited strictly to UTM tags. And you can have more than one instance, and you can run your URLs through a gauntlet of URLParam instances, if you like:

```
myImgTags = new URLParam();
myImgTags.addParam("h", 640);
myImgTags.addParam("w", 480);

myUTMs = new URLParam();
myUTMs.addParam("utm_source", "Facebook");
myUTMs.addParam("utm_content", "logolink");

myUTMs.addToLink( myImgTags.addToLink("https://mrandrewmills.com/images/example.png") );
// returns https://mrandrewmills.com/images/example.png?h=640&w=480&utm_source=Facebook&utm_content=logolink"
```
