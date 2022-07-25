import "./styles/Home.css";

export default function About() {
  return (
   
    	<section className="container container--paper">
		<div className="content-blue">
		<h2>An Archive of Unnamed Women</h2>
			
			<p className="hide-on-mobile">
				This feminist remix workshop
recovers photographs of unidentified women in digital collections to facilitate a critical discussion about how and why these images have
been shifted to the background of the archive through algorithms and gendered power relations writ large. 
		
			</p>
				<p className="show-on-mobile--inline">
				This feminist remix workshop
recovers photographs of unidentified women in digital collections to facilitate a critical discussion about archival practices. 
				
			</p>
		</div>
		
<!--		<div className="parallax bg1"></div> -->
	</section>

	<section className="container container--90">
		<div className="content-blue">
			<p>Visitors who search <em>An Archive of Unnamed Women</em> are presented with their photographs and, upon clicking for more information,
a juxtaposed description drawn from a parallel collection of
women&#8217;s writing about women.</p></div>
		
		<div className="parallax" id="bg2">&nbsp;</div>
		
	</section>
	
		<section className="container container--full">
		<div className="content-blue">
			<p>
			The digital portion of the project is an online archive juxtaposing nineteenth- and early twentieth-century literature about women with photographs of unnamed or unidentified American women found...
			
			</p></div>
		<div className="parallax" data-parallax-image="img/bg3-uplifting.jpg">
		&nbsp;</div>
	</section>
	
	<section className="container container--small">
		<div className="content-blue"><p>...in the collections of the New York Public Library, including the  Schomburg Center for Research in Black Culture. </p></div>
		<div className="parallax" data-parallax-image="img/bg4-hush.jpg">
		&nbsp;</div>
	</section>
	
	<section className="container container--full">
		<div className="content-blue"><p>As its physical centerpiece, the workshop includes a handmade quilt, fit with a pocket for a digital screen. </p></div>
		<div className="parallax" data-parallax-image="img/bg5-quilt.jpg">
		&nbsp;</div>
	</section>
	
	<section className="container container--90">
		<div className="content-blue"><p> As guests sign our guest
book...</p></div>
		<div className="parallax" data-parallax-image="img/bg6-sign.jpg">
		&nbsp;</div>
	</section>
	
	<section className="container container--small">
		<div className="content-blue"><p>...their hand-written names appear in the center of our quilt.</p> 
			<p> <br />
The quilt becomes an archive of named participants.</p></div>
		<div className="parallax" data-parallax-image="img/bg7-quilt.jpg">
		&nbsp;</div>
	</section>	
	<section className="container container--90">
		<div className="content-blue"><p>On the website, visitors who recognize an unnamed women can submit information that we forward to the collection holding the photograph. </p> 
			<p> <br />
The photographs that comprise <em>An Archive of Unnamed Women</em> will be deleted as a result of the recovery work enacted by named participants.</p></div>
		<div className="parallax" data-parallax-image="img/bg8-suggest.jpg">
		&nbsp;</div>
	</section>
	<section className="container container--90">
		<div className="content-blue">
			<h2><a href="https://unnamed-women.firebaseapp.com/archive">Launch Project</a></h2>
	<p><a href="https://unnamed-women.firebaseapp.com/archive"><img src="img/link-icon-sm.png" width="10" height="14" alt="link"/> Explore An Archive of Unnamed Women</a></p>
		
		</div>
		<div className="parallax" data-parallax-image="img/bg9-saint.jpg">
		&nbsp;</div>
	</section>		
	<section className="container container--full">
		<div className="content-blue">
			<h2>Credits</h2>
			<p>
				This project was conceived by xtine burrough and Sabrina Starnaman. UT Dallas Arts &amp; Humanities student Alyssa Yates led archival studies and quilt-making.</p> <p><br />Full stack web developer Al Madireddy, a UT Dallas Computer Science and Engineering student, developed the back-end programming in 2021.</p><p><br />Nicolas Nguyen is a UT Dallas Business student with experience in web
          development. He revised and redeveloped the back-end programming in 2022 for the second version of the project.{" "}
			<br>
		<!--Thank you to Marrio H for the parallax scroll code:
			<p className="p--credits">Find me on git <a href="https://github.com/marrio-h" target="_blank">@marrio-h</a></p>
-->

		</div>
		<div className="content-blue"><p>xtine and Sabrina have presented this workshop in classrooms and at conferences such as Digital Humanities and the Society for the Study of American Women Writers. We appreciate the kind sponsorship of an artist microgrant from the
          Nasher Sculpture Center in 2019 and a UT Dallas 2022 aXh
          &#8220;Uncertain Futures&#8221; grant in 2022.</p> <p><br />Contact xtne for more information: xtineburrough [at] gmail [dot] com. </p></div>
		
		<div className="parallax" data-parallax-image="img/bg10-virtual-sign.jpg"></div>
	</section>
	
	<footer>	<p><a href="https://unnamed-women.firebaseapp.com/archive"><img src="img/link-icon-sm.png" width="10" height="14" alt="link"/> Explore An Archive of Unnamed Women</a></p>
</footer>


	<script src="dist/universal-parallax.min.js"></script>
	<script>
		new universalParallax().init({
			speed: 4
		});
	</script>
     
      </div>
    </div>
  );
}
