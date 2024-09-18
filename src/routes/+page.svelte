<script lang="ts">
  import Post from "$lib/components/custom/Post.svelte"
  
  export let data;
  const {posts, users} = data;
  console.log(data);

</script>

<div class="col-span-3">
  {#each posts as post}

    <Post title={post.title} content={post.content}/>

  {/each}
</div>  



<!-- <script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import Post from "$lib/components/custom/Post.svelte"

  let title = 'test';
  let description = 'test';
  let content = 'test';
  let footer = 'test';

</script>

<div class="col-span-3">
  
    <Post {title} {description} {content} {footer}/>
    <Post {title} {description} {content} {footer}/>

    <Post {title} {description} {content} {footer}/>

    <Post {title} {description} {content} {footer}/>

    <Post {title} {description} {content} {footer}/>

    <Post {title} {description} {content} {footer}/>

    <Post {title} {description} {content} {footer}/>

    <Post {title} {description} {content} {footer}/>

    <Post {title} {description} {content} {footer}/>

</div> -->
