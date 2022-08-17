<script>
    import Header from "../sections/Header.svelte";
    import { onMount } from "svelte";

    import Icon from "svelte-icon/Icon.svelte";
    import iconsSvg from "../libs/icons__svg";

    
    import githubIcon from "../images/github.svg?raw";
    import gmail from "../images/gmail.svg?raw";
    import linkedin from "../images/linkedin.svg?raw";

    
    const icons = iconsSvg.svgColorList;

    const options = { timeZone: 'Europe/Lisbon', hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: false };
    let time = new Date();
    
    $: myTime = "";

    onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
            myTime = time.toLocaleString('en-US', options)
		}, 0.1000);

		return () => {
			clearInterval(interval);
		};
    });

</script>  

<Header />

<hr class="header__hr"/>

<section class="flex">
    <article class="index__section">
        <h3>ABOUT ME</h3>
        <br>
        <p>Hey, I am Mateo Narvaez. I am a full-stack developer based in Leiria, Portugal. </p>
        <p>I have worked with different types of front-end and back-end technologies. I work on different types of projects, developing from simple components to specific functions </p>
        <p>I love sports, food and travel.</p>
    </article>
    <article class="index__section">
        <h3>SKILLS</h3>
        <br>
        <div class="icons flex">
            {#each icons as {svg, size, opacity}}
                <Icon data={svg} size={size} color="transparent"/>
            {/each}
        </div>
    </article>
</section>

<hr />

<section class="flex">
    <section class="index__section">
        <h3>Projects</h3>
        <br>
        <p>I have worked on several projects, doing diferents taks in front-end and back-end:</p>
        <ul>
            <li>Simple components</li>
            <li>Landing Pages</li>
            <li>Api connections, creation of endpoints</li>
            <li>Complete projects with front-end and back-end</li>
        </ul>
    </section>
    <section class="index__section">
        <h3>Experience</h3>
        <br>
        <p>More than a year of professional experience and several courses in new technologies</p>
        <ul>
            <li>Freelance: Jun 2021 | Current</li>
            <li>Courses with degree: 2021 | Current</li>
            <li>Webtales (Internship): Mar 2021 | Jun 2021</li>
            <li>University - Computer Science: 2017 </li>
        </ul>
    </section>
</section>

<hr />

<section class="flex">
    <section class="index__section section__contact">
        <h3>Contacts</h3>
        <br>
        <p>Feel free to call, text or email. I speak English, Spanish and Portuguese</p>
        <p>I usually avaiable between 9h to 21h (UTC + 1)</p>  
        <ul class="section__contact__list">
            <li><Icon data={gmail} /> <span> mnarvaez2299@gmail.com </span></li>
            <li><Icon data={linkedin} /><a href="https://www.linkedin.com/in/mateo-narv%C3%A1ez/">https://www.linkedin.com/in/mateo-narv%C3%A1ez/</a></li>
            <li><Icon data={githubIcon} /><a href="https://github.com/MateoRNV">https://github.com/MateoRNV</a></li>
        </ul>
    </section>
    <section class="index__section section__mytime flex">
        <h3 class="section__time">UTC + 1</h3>
        <br>
        <span>{myTime}</span>
    </section>
</section>

<style lang="scss">
    .header__hr{
        width: 100%;
    }
    hr{
        width: 92%;
    }
    .index__section {
        margin: 4rem 2rem;
        width: 50%;
        padding: 0 5rem;

        h3{
            margin-bottom: 2rem;
            font-family: $aclonica;
            font-size: 30px;
            font-weight: lighter;
            color: white;
        }

        p{
            margin-bottom: 2.5rem;
            font-family: $mukta;
            font-size: 20px;
            font-weight: 300;
            line-height: 1.5;
            color: white;
        }
        li{
            font-family: $mukta;
            font-size: 18px;
            font-weight: 300;
            list-style: outside;
            line-height: 2rem;
        }
    }
    .section__contact{
        width: 70%;
        p{
            margin-bottom: 0;
        }
        li{
            list-style: none;
            margin: 1rem 0;
        }
        a{
            color: white;
            text-decoration: none;
        }
        .section__contact__list{
            margin-top: 2rem;
            li{
                gap: 1rem;
                display: flex;
                align-items: center;
            }
        }
    }
    .section__time{
        text-align: center;
    }
    .icons{
        margin: 0.5rem 0;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        gap: 3rem 5.5rem;
    }
    .section__mytime{
        flex-direction: column;
        align-items: center;
        font-size: 40px;
    }
</style>