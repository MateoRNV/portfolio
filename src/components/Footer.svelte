<hr />
<div>
    <h5>Thanks for visit the page. </h5> <p class="heart"> ❤ </p>
    <h5>I hope to be in touch soon</h5>
</div>

<style lang="scss">
    div {
        display: flex;
        justify-content: center;
        align-items: baseline;
        flex-wrap: wrap;
        margin: 1rem 0;
        text-align: center;
    }
    h5 {
        margin: 0 2rem;
        font-family: $varela;
        font-weight: lighter;
        font-size: 16px;
    }
    .heart {
        color: #eb3e3e;
        animation: heartBeat 1s infinite;
    }
    @keyframes heartBeat{
        0%{
            transform: scale(1.3);
        }
        50%{
            transform: scale(1.6);
        }
        100%{
            transform: scale(1.3);
        }
    }
</style>
