# Lists and Keys Workshop

## Task 1

In the `<Main/>` component (src/components/Main), use the map() method to loop over the the 'posts' state. For each post in the array, return a `<Post/>` component.

## Task 2

Set the `key` property for each `<Post/>` component as the `postId` contained within the post object.

## Task 3

Hand down each post object as props for the `<Post/>` component.

## Task 4

In the `<Post/>` component (src/components/Post) receive the post object that you have handed down as props.

## Task 5

Use the information contained within the post object to build the `<Post/>` component using HTML elements in JSX. For the `highlights` property of the post object, use the map() method to generate an `<li>` element for each item in the array. For each `<li>` element, set the key to be the index of the item in the `highlights` array.

## Task 6

Use `npm start` to test whether your code is working. You should see three posts for the price of one! Your map() method and `<Post/>` component are working together to generate a post for each item in the `posts` state.

## Task 7

Add a new post to the `samplePosts` array in src/libs/data. It should seamlessly appear on the page underneath the original posts.

## Task 8 - Bonus

Edit the other components and their respective css files to make Ben's pigeon blog the best on the web!
