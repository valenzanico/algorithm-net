<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";
	import Project from "./routes/Article.svelte";
	import Article from "./routes/Project.svelte";
   
	export let url = "";
  </script> 
   
  <Router url="{url}">
	<nav>
	  <Link to="/">Home</Link>
	  <Link to="about">About</Link>
	  <Link to="article">Article</Link>
	  <Link to="project">Project</Link>
	</nav>
	<div>
	  <Route path="about" component="{About}" />
	  <Route path="/"><Home /></Route>
	  <Route path="article" component="{Article}" />
	  <Route path="project" component="{Project}" />
	</div>
  </Router>