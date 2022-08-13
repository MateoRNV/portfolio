<script>
    import Icon from "svelte-icon/Icon.svelte";
    import iconsSvg from "../libs/icons__svg";
    
    const icons = iconsSvg.svgColorList;

</script>  

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

<section>
    <div class="index__section">
        <h3>Contacts</h3>
        
    </div>
</section>

<style lang="scss">
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
    .icons{
        margin: 0.5rem 0;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        gap: 3rem 5.5rem;
    }
</style>