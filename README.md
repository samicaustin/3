
# Q U E E R   R E X
A carefully-curated, ever-growing collection of the best queer media.


# MVP 
    - CRUD functionality with media model
        REQUIRED PROPS
        1. title
        2. mediaType
        3. creator
        4. description
        5. imageUrl
        6. yearCreated
            
        NON-REQUIRED PROPS:
        + link
        + keywords
        + forFansOf
        + accessibility (captions available?)
        + triggerWarnings
        + findOn (aka where to find/stream esp. w/shows and movies)

    - Post, get, update, and delete routes

    - Stream of today's queer news from NewsAPI



# USER STORY
PROBLEM: It's hard to find good queer content, even though there's more available today than ever before. LGTBQIA++ folks often consume media they don't even care for due to their craving for representation. 

SOLUTION: Queer Rex is a collection of passionate, queer media recommendations compiled by real people. Anyone who has discovered an awesome piece of LGTBQIA++ content can share it with the world on Queer Rex, which means the available content is constantly expanding. 



# NICE-TO-HAVES
    - search capability using any item from form
    - edit and delete live on a secret path 
    - new posts have a boolean prop of approved that's autoset to false;
        I must go into my secret route to see all the unapproved posts and 
        toggle them to true in order for it to be accessible on the site
    - SLAMMIN' styling 