





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-UDS3MR1FfvqHmqZAs2MWSDCWPwLemVRLqCwld4/zfwH0vhv7I6RYmDnMnNAVQKP1YYvqnccOCH4iOhFaUUyrjw==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-2e9090135c22aad5f56c2f72dcba7880.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-p4eUPemTc/4dlxCrmhH7lQDBSMyxvSF/8JUgk1+wawzib+okmfn1cNuyiRp9pfB76zPitgclXdaPUJivU2s/aw==" rel="stylesheet" href="https://github.githubassets.com/assets/site-789f905d50a214e0c8606578148aa830.css" />
    <link crossorigin="anonymous" media="all" integrity="sha512-bnWNt5aCIAqrRCDcaMXqFcKDZP8Zy31S4RFvaf7/yuSe6emQ1GfFHXAJUo+1ok5aO7AQGNB+jtqky1GUsUo5lQ==" rel="stylesheet" href="https://github.githubassets.com/assets/github-989ddaf006bcf7252e11cff4475d58fc.css" />
    
    
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>pako/pako.min.js at master · nodeca/pako · GitHub</title>
    <meta name="description" content="high speed zlib port to javascript, works in browser &amp; node.js - nodeca/pako">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars0.githubusercontent.com/u/723678?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="nodeca/pako" /><meta name="twitter:description" content="high speed zlib port to javascript, works in browser &amp; node.js - nodeca/pako" />
    <meta property="og:image" content="https://avatars0.githubusercontent.com/u/723678?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="nodeca/pako" /><meta property="og:url" content="https://github.com/nodeca/pako" /><meta property="og:description" content="high speed zlib port to javascript, works in browser &amp; node.js - nodeca/pako" />

  <link rel="assets" href="https://github.githubassets.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="D56C:10CA:886AE8:E1E6F3:5D56C603" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="D56C:10CA:886AE8:E1E6F3:5D56C603" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">


<meta class="js-ga-set" name="dimension1" content="Logged Out">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="ZmJmMmYyMWQ1M2I1NzYyZDUyZGZhNGE0MjE0Mzc1NGFkOTc4NWIxY2M5NjViOTQyOGQ5OTk1NjVmNjc0ZTBlOXx7InJlbW90ZV9hZGRyZXNzIjoiNjcuMjQ4LjIyNy4yNTAiLCJyZXF1ZXN0X2lkIjoiRDU2QzoxMENBOjg4NkFFODpFMUU2RjM6NUQ1NkM2MDMiLCJ0aW1lc3RhbXAiOjE1NjU5Njc4NzYsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="ACTIONS_V2_ON_MARKETPLACE,MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS">

  <meta name="html-safe-nonce" content="bfe8235ff59c3edf73bd6bf5465ff885bb54c854">

  <meta http-equiv="x-pjax-version" content="808f705be7c0b954eacaff42ecc728df">
  

      <link href="https://github.com/nodeca/pako/commits/master.atom" rel="alternate" title="Recent Commits to pako:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/nodeca/pako git https://github.com/nodeca/pako.git">

  <meta name="octolytics-dimension-user_id" content="723678" /><meta name="octolytics-dimension-user_login" content="nodeca" /><meta name="octolytics-dimension-repository_id" content="16231859" /><meta name="octolytics-dimension-repository_nwo" content="nodeca/pako" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="16231859" /><meta name="octolytics-dimension-repository_network_root_nwo" content="nodeca/pako" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/nodeca/pako/blob/master/dist/pako.min.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">





  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-responsive page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    


        <header class="Header-old header-logged-out js-details-container Details position-relative f4 py-2" role="banner">
  <div class="container-lg d-lg-flex flex-items-center p-responsive">
    <div class="d-flex flex-justify-between flex-items-center">
        <a class="mr-4" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
          <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>

          <div class="d-lg-none css-truncate css-truncate-target width-fit p-2">
            
              <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <a class="Header-link" href="/nodeca">nodeca</a>
    /
    <a class="Header-link" href="/nodeca/pako">pako</a>


          </div>

        <div class="d-flex flex-items-center">
            <a href="/join?source=header-repo"
              class="d-inline-block d-lg-none f5 text-white no-underline border border-gray-dark rounded-2 px-2 py-1 mr-3 mr-sm-5"
              data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:null,&quot;originating_request_id&quot;:&quot;D56C:10CA:886AE8:E1E6F3:5D56C603&quot;,&quot;originating_url&quot;:&quot;https://github.com/nodeca/pako/blob/master/dist/pako.min.js&quot;,&quot;referrer&quot;:null,&quot;user_id&quot;:null}}" data-hydro-click-hmac="3c1e58af00ce0da8bddf8888f74d4cd497f776783907a3c4a3646b3bd95a6aec"
              data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">
              Sign&nbsp;up
            </a>

          <button class="btn-link d-lg-none mt-1 js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
            <svg height="24" class="octicon octicon-three-bars text-white" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
          </button>
        </div>
    </div>

    <div class="HeaderMenu HeaderMenu--logged-out position-fixed top-0 right-0 bottom-0 height-fit position-lg-relative d-lg-flex flex-justify-between flex-items-center flex-auto">
      <div class="d-flex d-lg-none flex-justify-end border-bottom bg-gray-light p-3">
        <button class="btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <svg height="24" class="octicon octicon-x text-gray" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        </button>
      </div>

        <nav class="mt-0 px-3 px-lg-0 mb-5 mb-lg-0" aria-label="Global">
          <ul class="d-lg-flex list-style-none">
              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Why GitHub?
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>
                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="/features" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Features <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>
                    <ul class="list-style-none f5 pb-3">
                      <li class="edge-item-fix"><a href="/features/code-review/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code review">Code review</a></li>
                      <li class="edge-item-fix"><a href="/features/project-management/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Project management">Project management</a></li>
                      <li class="edge-item-fix"><a href="/features/integrations" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Integrations">Integrations</a></li>
                      <li class="edge-item-fix"><a href="/features/actions" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Actions">Actions</a>
                          <li class="edge-item-fix"><a href="/features/package-registry" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Package Registry">Package registry</a>
                      <li class="edge-item-fix"><a href="/features#team-management" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Team management">Team management</a></li>
                      <li class="edge-item-fix"><a href="/features#social-coding" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Social coding">Social coding</a></li>
                      <li class="edge-item-fix"><a href="/features#documentation" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Documentation">Documentation</a></li>
                      <li class="edge-item-fix"><a href="/features#code-hosting" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Code hosting">Code hosting</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="/customer-stories" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Customer stories">Customer stories <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="/security" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Security">Security <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="/enterprise" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Enterprise">Enterprise</a>
              </li>

              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Explore
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/explore" class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Explore">Explore GitHub <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Learn &amp; contribute</h4>
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/topics" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Topics">Topics</a></li>
                        <li class="edge-item-fix"><a href="/collections" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Collections">Collections</a></li>
                      <li class="edge-item-fix"><a href="/trending" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Trending">Trending</a></li>
                      <li class="edge-item-fix"><a href="https://lab.github.com/" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Learning lab">Learning Lab</a></li>
                      <li class="edge-item-fix"><a href="https://opensource.guide" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Open source guides">Open source guides</a></li>
                    </ul>

                    <h4 class="text-gray-light text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Connect with others</h4>
                    <ul class="list-style-none mb-0">
                      <li class="edge-item-fix"><a href="https://github.com/events" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Events">Events</a></li>
                      <li class="edge-item-fix"><a href="https://github.community" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Community forum">Community forum</a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to GitHub Education">GitHub Education</a></li>
                    </ul>
                  </div>
                </details>
              </li>

              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="/marketplace" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Marketplace">Marketplace</a>
              </li>

              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Pricing
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                       <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded-1 bg-white px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="/pricing" class="pb-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Pricing">Plans <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a>

                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="/pricing#feature-comparison" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Compare plans">Compare plans</a></li>
                      <li class="edge-item-fix"><a href="https://enterprise.github.com/contact" class="py-2 lh-condensed-ultra d-block link-gray no-underline f5" data-ga-click="(Logged out) Header, go to Contact Sales">Contact Sales</a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="/nonprofit" class="py-2 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Nonprofits">Nonprofit <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com" class="py-2 pb-0 lh-condensed-ultra d-block no-underline link-gray-dark no-underline h5 Bump-link--hover"  data-ga-click="(Logged out) Header, go to Education">Education <span class="Bump-link-symbol float-right text-normal text-gray-light">&rarr;</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
          </ul>
        </nav>

      <div class="d-lg-flex flex-items-center px-3 px-lg-0 text-center text-lg-left">
          <div class="d-lg-flex mb-3 mb-lg-0">
            <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="16231859" data-scoped-search-url="/nodeca/pako/search" data-unscoped-search-url="/search" action="/nodeca/pako/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=QMGkjsd1zbFLLbrzzMYthzfYMtVLfXCIaccB3+B7OAiasydxfEFAS7hCLwHAsyo9jLdjfXRklqwC25WJmnh+KA=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


</ul>

            </div>
      </label>
</form>  </div>
</div>

          </div>

        <a href="/login?return_to=%2Fnodeca%2Fpako%2Fblob%2Fmaster%2Fdist%2Fpako.min.js"
          class="HeaderMenu-link no-underline mr-3"
          data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:null,&quot;originating_request_id&quot;:&quot;D56C:10CA:886AE8:E1E6F3:5D56C603&quot;,&quot;originating_url&quot;:&quot;https://github.com/nodeca/pako/blob/master/dist/pako.min.js&quot;,&quot;referrer&quot;:null,&quot;user_id&quot;:null}}" data-hydro-click-hmac="7b8f1c352117828d84ba722034b4e710b521467a3866ba0e632e82528925965c"
          data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">
          Sign&nbsp;in
        </a>
          <a href="/join?source=header-repo"
            class="HeaderMenu-link d-inline-block no-underline border border-gray-dark rounded-1 px-2 py-1"
            data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:null,&quot;originating_request_id&quot;:&quot;D56C:10CA:886AE8:E1E6F3:5D56C603&quot;,&quot;originating_url&quot;:&quot;https://github.com/nodeca/pako/blob/master/dist/pako.min.js&quot;,&quot;referrer&quot;:null,&quot;user_id&quot;:null}}" data-hydro-click-hmac="7b8f1c352117828d84ba722034b4e710b521467a3866ba0e632e82528925965c"
            data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">
            Sign&nbsp;up
          </a>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      


  



  








  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav pt-0 pt-lg-4 ">
    <div class="repohead-details-container clearfix container-lg p-responsive d-none d-lg-block">

      <ul class="pagehead-actions">

    <li>
      <details id="funding-links-modal" class="details-reset details-overlay details-overlay-dark d-inline-block float-left" >
        <summary id="sponsor-button-repo" class="btn btn-sm"
          title="Sponsor nodeca/pako"
          data-ga-click="Repository, show sponsor modal, action:blob#show; text:Sponsor"
          >
          <svg class="octicon octicon-heart text-pink v-align-middle" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z"/></svg>
          Sponsor
        </summary>
        <details-dialog
          class="anim-fade-in fast Box Box--overlay d-flex flex-column"
            src="/nodeca/pako/funding_links?fragment=1"
            preload
          >
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
            </button>
            <h3 class="Box-title">
              Sponsor nodeca/pako
            </h3>
          </div>
          <div class="overflow-auto">
            <include-fragment
              >
              <div class="octocat-spinner my-3" aria-label="Loading..."></div>
            </include-fragment>
          </div>
        </details-dialog>
      </details>
    </li>



  <li>
    
  <a class="tooltipped tooltipped-s btn btn-sm btn-with-count" aria-label="You must be signed in to watch a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;notification subscription menu watch&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:null,&quot;originating_request_id&quot;:&quot;D56C:10CA:886AE8:E1E6F3:5D56C603&quot;,&quot;originating_url&quot;:&quot;https://github.com/nodeca/pako/blob/master/dist/pako.min.js&quot;,&quot;referrer&quot;:null,&quot;user_id&quot;:null}}" data-hydro-click-hmac="3a56d5fc91b9712767b8ec4d67d3cc8a38891945fd16ef2fe258617d6c79e738" href="/login?return_to=%2Fnodeca%2Fpako">
    <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
</a>    <a class="social-count" href="/nodeca/pako/watchers"
       aria-label="81 users are watching this repository">
      81
    </a>

  </li>

  <li>
        <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to star a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:16231859,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:null,&quot;originating_request_id&quot;:&quot;D56C:10CA:886AE8:E1E6F3:5D56C603&quot;,&quot;originating_url&quot;:&quot;https://github.com/nodeca/pako/blob/master/dist/pako.min.js&quot;,&quot;referrer&quot;:null,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4abbba3329b82d306e481b74d8b043b0cd27b3564e0d09c15e9a3ab063652b0b" href="/login?return_to=%2Fnodeca%2Fpako">
      <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
      Star
</a>
    <a class="social-count js-social-count" href="/nodeca/pako/stargazers"
      aria-label="2441 users starred this repository">
      2,441
    </a>

  </li>

  <li>
      <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to fork a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;repo details fork button&quot;,&quot;repository_id&quot;:16231859,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;client_id&quot;:null,&quot;originating_request_id&quot;:&quot;D56C:10CA:886AE8:E1E6F3:5D56C603&quot;,&quot;originating_url&quot;:&quot;https://github.com/nodeca/pako/blob/master/dist/pako.min.js&quot;,&quot;referrer&quot;:null,&quot;user_id&quot;:null}}" data-hydro-click-hmac="011f1561c3421c25a47a7534977aab4e2ecef2278fe38e3cad09db906631e109" href="/login?return_to=%2Fnodeca%2Fpako">
        <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
</a>
    <a href="/nodeca/pako/network/members" class="social-count"
       aria-label="435 users forked this repository">
      435
    </a>
  </li>
</ul>

      <h1 class="public ">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="organization" data-hovercard-url="/orgs/nodeca/hovercard" href="/nodeca">nodeca</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/nodeca/pako">pako</a></strong>
  

</h1>

    </div>
    
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /nodeca/pako" href="/nodeca/pako">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /nodeca/pako/issues" href="/nodeca/pako/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">4</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /nodeca/pako/pulls" href="/nodeca/pako/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">1</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /nodeca/pako/projects" href="/nodeca/pako/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy /nodeca/pako/security/advisories" href="/nodeca/pako/security/advisories">
      <svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /nodeca/pako/pulse" href="/nodeca/pako/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /nodeca/pako" href="/nodeca/pako">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /nodeca/pako/issues" href="/nodeca/pako/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">4</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /nodeca/pako/pulls" href="/nodeca/pako/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">1</span>
        <meta itemprop="position" content="3">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /nodeca/pako/projects" href="/nodeca/pako/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="4">
</a>      </span>


      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy /nodeca/pako/security/advisories" href="/nodeca/pako/security/advisories">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="6">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /nodeca/pako/pulse" href="/nodeca/pako/pulse">
        Pulse
</a>

  </nav>
</div>


  </div>
<div class="container-lg clearfix new-discussion-timeline experiment-repo-nav  p-responsive">
  <div class="repository-content ">

    
    


  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/nodeca/pako/blob/dbab16e12be930a758f8401f0d5151e83a0d392f/dist/pako.min.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:f7e9f86202e603066b8d22d653fbe95b -->
          <div class="signup-prompt-bg rounded-1">
      <div class="signup-prompt p-4 text-center mb-4 rounded-1">
        <div class="position-relative">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/prompt_dismissals/signup" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="8o2IYEDs0BIUMvryY+y3YezoL0jAAkplsXQPTVKCVkDb5tY1cbpMz62Jek3KsHNHAoEjlOGOWuCBdSEmkB9odA==" />
            <button type="submit" class="position-absolute top-0 right-0 btn-link link-gray" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
              Dismiss
            </button>
</form>          <h3 class="pt-2">Join GitHub today</h3>
          <p class="col-6 mx-auto">GitHub is home to over 40 million developers working together to host and review code, manage projects, and build software together.</p>
          <a class="btn btn-primary" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;files signup prompt&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;client_id&quot;:null,&quot;originating_request_id&quot;:&quot;D56C:10CA:886AE8:E1E6F3:5D56C603&quot;,&quot;originating_url&quot;:&quot;https://github.com/nodeca/pako/blob/master/dist/pako.min.js&quot;,&quot;referrer&quot;:null,&quot;user_id&quot;:null}}" data-hydro-click-hmac="4225822a0ccc8850f3ec245618706cc65d903f2b210104b6fde718c885cd5bb7" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up" href="/join?source=prompt-blob-show">Sign up</a>
        </div>
      </div>
    </div>


    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-column flex-md-row">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
  </summary>

  <details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/nodeca/pako/ref-list/master/dist/pako.min.js?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/nodeca/pako/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="dist/pako.min.js" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/nodeca/pako"><span>pako</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/nodeca/pako/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">pako.min.js</strong>
      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/nodeca/pako/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="dist/pako.min.js" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    
  <div class="Box Box--condensed d-flex flex-column flex-shrink-0">
      <div class="Box-body d-flex flex-justify-between bg-blue-light flex-column flex-md-row flex-items-start flex-md-items-center">
        <span class="pr-md-4 f6">
          <a rel="contributor" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=319465" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/puzrin"><img class="avatar" src="https://avatars0.githubusercontent.com/u/319465?s=40&amp;v=4" width="20" height="20" alt="@puzrin" /></a>
          <a class="text-bold link-gray-dark lh-default v-align-middle" rel="contributor" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=319465" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/puzrin">puzrin</a>
            <span class="lh-default v-align-middle">
              <a data-pjax="true" title="Browser files rebuild" class="link-gray" href="/nodeca/pako/commit/6d519932d219cf21a9756bb9b85a02a990f0aabe">Browser files rebuild</a>
            </span>
        </span>
        <span class="d-inline-block flex-shrink-0 v-align-bottom f6 mt-2 mt-md-0">
          <a class="pr-2 text-mono link-gray" href="/nodeca/pako/commit/6d519932d219cf21a9756bb9b85a02a990f0aabe" data-pjax>6d51993</a>
          <relative-time datetime="2019-02-28T21:37:51Z">Mar 1, 2019</relative-time>
        </span>
      </div>

    <div class="Box-body d-flex flex-items-center flex-auto f6 border-bottom-0 flex-wrap" >
      <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
        <summary class="btn-link" aria-haspopup="dialog">
          <span><strong>1</strong> contributor</span>
        </summary>
        <details-dialog
          class="Box Box--overlay d-flex flex-column anim-fade-in fast"
          aria-label="Users who have contributed to this file"
          src="/nodeca/pako/contributors/master/dist/pako.min.js/list" preload>
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
            </button>
            <h3 class="Box-title">
              Users who have contributed to this file
            </h3>
          </div>
          <include-fragment class="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
        </details-dialog>
      </details>
    </div>
  </div>





    <div class="Box mt-3 position-relative">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">

  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">
      2 lines (1 sloc)
      <span class="file-info-divider"></span>
    44.9 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/nodeca/pako/raw/master/dist/pako.min.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/nodeca/pako/blame/master/dist/pako.min.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/nodeca/pako/commits/master/dist/pako.min.js">History</a>
    </div>


    <div>

          <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
          <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
            aria-label="You must be signed in to make or propose changes">
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
    </div>
  </div>
</div>




      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">!function(t){if(&quot;object&quot;==typeof exports&amp;&amp;&quot;undefined&quot;!=typeof module)module.exports=t();else if(&quot;function&quot;==typeof define&amp;&amp;define.amd)define([],t);else{(&quot;undefined&quot;!=typeof window?window:&quot;undefined&quot;!=typeof global?global:&quot;undefined&quot;!=typeof self?self:this).pako=t()}}(function(){return function r(s,o,l){function h(e,t){if(!o[e]){if(!s[e]){var a=&quot;function&quot;==typeof require&amp;&amp;require;if(!t&amp;&amp;a)return a(e,!0);if(d)return d(e,!0);var i=new Error(&quot;Cannot find module &#39;&quot;+e+&quot;&#39;&quot;);throw i.code=&quot;MODULE_NOT_FOUND&quot;,i}var n=o[e]={exports:{}};s[e][0].call(n.exports,function(t){return h(s[e][1][t]||t)},n,n.exports,r,s,o,l)}return o[e].exports}for(var d=&quot;function&quot;==typeof require&amp;&amp;require,t=0;t&lt;l.length;t++)h(l[t]);return h}({1:[function(t,e,a){&quot;use strict&quot;;var s=t(&quot;./zlib/deflate&quot;),o=t(&quot;./utils/common&quot;),l=t(&quot;./utils/strings&quot;),n=t(&quot;./zlib/messages&quot;),r=t(&quot;./zlib/zstream&quot;),h=Object.prototype.toString,d=0,f=-1,_=0,u=8;function c(t){if(!(this instanceof c))return new c(t);this.options=o.assign({level:f,method:u,chunkSize:16384,windowBits:15,memLevel:8,strategy:_,to:&quot;&quot;},t||{});var e=this.options;e.raw&amp;&amp;0&lt;e.windowBits?e.windowBits=-e.windowBits:e.gzip&amp;&amp;0&lt;e.windowBits&amp;&amp;e.windowBits&lt;16&amp;&amp;(e.windowBits+=16),this.err=0,this.msg=&quot;&quot;,this.ended=!1,this.chunks=[],this.strm=new r,this.strm.avail_out=0;var a=s.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==d)throw new Error(n[a]);if(e.header&amp;&amp;s.deflateSetHeader(this.strm,e.header),e.dictionary){var i;if(i=&quot;string&quot;==typeof e.dictionary?l.string2buf(e.dictionary):&quot;[object ArrayBuffer]&quot;===h.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,(a=s.deflateSetDictionary(this.strm,i))!==d)throw new Error(n[a]);this._dict_set=!0}}function i(t,e){var a=new c(e);if(a.push(t,!0),a.err)throw a.msg||n[a.err];return a.result}c.prototype.push=function(t,e){var a,i,n=this.strm,r=this.options.chunkSize;if(this.ended)return!1;i=e===~~e?e:!0===e?4:0,&quot;string&quot;==typeof t?n.input=l.string2buf(t):&quot;[object ArrayBuffer]&quot;===h.call(t)?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length;do{if(0===n.avail_out&amp;&amp;(n.output=new o.Buf8(r),n.next_out=0,n.avail_out=r),1!==(a=s.deflate(n,i))&amp;&amp;a!==d)return this.onEnd(a),!(this.ended=!0);0!==n.avail_out&amp;&amp;(0!==n.avail_in||4!==i&amp;&amp;2!==i)||(&quot;string&quot;===this.options.to?this.onData(l.buf2binstring(o.shrinkBuf(n.output,n.next_out))):this.onData(o.shrinkBuf(n.output,n.next_out)))}while((0&lt;n.avail_in||0===n.avail_out)&amp;&amp;1!==a);return 4===i?(a=s.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===d):2!==i||(this.onEnd(d),!(n.avail_out=0))},c.prototype.onData=function(t){this.chunks.push(t)},c.prototype.onEnd=function(t){t===d&amp;&amp;(&quot;string&quot;===this.options.to?this.result=this.chunks.join(&quot;&quot;):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Deflate=c,a.deflate=i,a.deflateRaw=function(t,e){return(e=e||{}).raw=!0,i(t,e)},a.gzip=function(t,e){return(e=e||{}).gzip=!0,i(t,e)}},{&quot;./utils/common&quot;:3,&quot;./utils/strings&quot;:4,&quot;./zlib/deflate&quot;:8,&quot;./zlib/messages&quot;:13,&quot;./zlib/zstream&quot;:15}],2:[function(t,e,a){&quot;use strict&quot;;var f=t(&quot;./zlib/inflate&quot;),_=t(&quot;./utils/common&quot;),u=t(&quot;./utils/strings&quot;),c=t(&quot;./zlib/constants&quot;),i=t(&quot;./zlib/messages&quot;),n=t(&quot;./zlib/zstream&quot;),r=t(&quot;./zlib/gzheader&quot;),b=Object.prototype.toString;function s(t){if(!(this instanceof s))return new s(t);this.options=_.assign({chunkSize:16384,windowBits:0,to:&quot;&quot;},t||{});var e=this.options;e.raw&amp;&amp;0&lt;=e.windowBits&amp;&amp;e.windowBits&lt;16&amp;&amp;(e.windowBits=-e.windowBits,0===e.windowBits&amp;&amp;(e.windowBits=-15)),!(0&lt;=e.windowBits&amp;&amp;e.windowBits&lt;16)||t&amp;&amp;t.windowBits||(e.windowBits+=32),15&lt;e.windowBits&amp;&amp;e.windowBits&lt;48&amp;&amp;0==(15&amp;e.windowBits)&amp;&amp;(e.windowBits|=15),this.err=0,this.msg=&quot;&quot;,this.ended=!1,this.chunks=[],this.strm=new n,this.strm.avail_out=0;var a=f.inflateInit2(this.strm,e.windowBits);if(a!==c.Z_OK)throw new Error(i[a]);if(this.header=new r,f.inflateGetHeader(this.strm,this.header),e.dictionary&amp;&amp;(&quot;string&quot;==typeof e.dictionary?e.dictionary=u.string2buf(e.dictionary):&quot;[object ArrayBuffer]&quot;===b.call(e.dictionary)&amp;&amp;(e.dictionary=new Uint8Array(e.dictionary)),e.raw&amp;&amp;(a=f.inflateSetDictionary(this.strm,e.dictionary))!==c.Z_OK))throw new Error(i[a])}function o(t,e){var a=new s(e);if(a.push(t,!0),a.err)throw a.msg||i[a.err];return a.result}s.prototype.push=function(t,e){var a,i,n,r,s,o=this.strm,l=this.options.chunkSize,h=this.options.dictionary,d=!1;if(this.ended)return!1;i=e===~~e?e:!0===e?c.Z_FINISH:c.Z_NO_FLUSH,&quot;string&quot;==typeof t?o.input=u.binstring2buf(t):&quot;[object ArrayBuffer]&quot;===b.call(t)?o.input=new Uint8Array(t):o.input=t,o.next_in=0,o.avail_in=o.input.length;do{if(0===o.avail_out&amp;&amp;(o.output=new _.Buf8(l),o.next_out=0,o.avail_out=l),(a=f.inflate(o,c.Z_NO_FLUSH))===c.Z_NEED_DICT&amp;&amp;h&amp;&amp;(a=f.inflateSetDictionary(this.strm,h)),a===c.Z_BUF_ERROR&amp;&amp;!0===d&amp;&amp;(a=c.Z_OK,d=!1),a!==c.Z_STREAM_END&amp;&amp;a!==c.Z_OK)return this.onEnd(a),!(this.ended=!0);o.next_out&amp;&amp;(0!==o.avail_out&amp;&amp;a!==c.Z_STREAM_END&amp;&amp;(0!==o.avail_in||i!==c.Z_FINISH&amp;&amp;i!==c.Z_SYNC_FLUSH)||(&quot;string&quot;===this.options.to?(n=u.utf8border(o.output,o.next_out),r=o.next_out-n,s=u.buf2string(o.output,n),o.next_out=r,o.avail_out=l-r,r&amp;&amp;_.arraySet(o.output,o.output,n,r,0),this.onData(s)):this.onData(_.shrinkBuf(o.output,o.next_out)))),0===o.avail_in&amp;&amp;0===o.avail_out&amp;&amp;(d=!0)}while((0&lt;o.avail_in||0===o.avail_out)&amp;&amp;a!==c.Z_STREAM_END);return a===c.Z_STREAM_END&amp;&amp;(i=c.Z_FINISH),i===c.Z_FINISH?(a=f.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===c.Z_OK):i!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(o.avail_out=0))},s.prototype.onData=function(t){this.chunks.push(t)},s.prototype.onEnd=function(t){t===c.Z_OK&amp;&amp;(&quot;string&quot;===this.options.to?this.result=this.chunks.join(&quot;&quot;):this.result=_.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Inflate=s,a.inflate=o,a.inflateRaw=function(t,e){return(e=e||{}).raw=!0,o(t,e)},a.ungzip=o},{&quot;./utils/common&quot;:3,&quot;./utils/strings&quot;:4,&quot;./zlib/constants&quot;:6,&quot;./zlib/gzheader&quot;:9,&quot;./zlib/inflate&quot;:11,&quot;./zlib/messages&quot;:13,&quot;./zlib/zstream&quot;:15}],3:[function(t,e,a){&quot;use strict&quot;;var i=&quot;undefined&quot;!=typeof Uint8Array&amp;&amp;&quot;undefined&quot;!=typeof Uint16Array&amp;&amp;&quot;undefined&quot;!=typeof Int32Array;a.assign=function(t){for(var e,a,i=Array.prototype.slice.call(arguments,1);i.length;){var n=i.shift();if(n){if(&quot;object&quot;!=typeof n)throw new TypeError(n+&quot;must be non-object&quot;);for(var r in n)e=n,a=r,Object.prototype.hasOwnProperty.call(e,a)&amp;&amp;(t[r]=n[r])}}return t},a.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var n={arraySet:function(t,e,a,i,n){if(e.subarray&amp;&amp;t.subarray)t.set(e.subarray(a,a+i),n);else for(var r=0;r&lt;i;r++)t[n+r]=e[a+r]},flattenChunks:function(t){var e,a,i,n,r,s;for(e=i=0,a=t.length;e&lt;a;e++)i+=t[e].length;for(s=new Uint8Array(i),e=n=0,a=t.length;e&lt;a;e++)r=t[e],s.set(r,n),n+=r.length;return s}},r={arraySet:function(t,e,a,i,n){for(var r=0;r&lt;i;r++)t[n+r]=e[a+r]},flattenChunks:function(t){return[].concat.apply([],t)}};a.setTyped=function(t){t?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,n)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,r))},a.setTyped(i)},{}],4:[function(t,e,a){&quot;use strict&quot;;var l=t(&quot;./common&quot;),n=!0,r=!0;try{String.fromCharCode.apply(null,[0])}catch(t){n=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){r=!1}for(var h=new l.Buf8(256),i=0;i&lt;256;i++)h[i]=252&lt;=i?6:248&lt;=i?5:240&lt;=i?4:224&lt;=i?3:192&lt;=i?2:1;function d(t,e){if(e&lt;65534&amp;&amp;(t.subarray&amp;&amp;r||!t.subarray&amp;&amp;n))return String.fromCharCode.apply(null,l.shrinkBuf(t,e));for(var a=&quot;&quot;,i=0;i&lt;e;i++)a+=String.fromCharCode(t[i]);return a}h[254]=h[254]=1,a.string2buf=function(t){var e,a,i,n,r,s=t.length,o=0;for(n=0;n&lt;s;n++)55296==(64512&amp;(a=t.charCodeAt(n)))&amp;&amp;n+1&lt;s&amp;&amp;56320==(64512&amp;(i=t.charCodeAt(n+1)))&amp;&amp;(a=65536+(a-55296&lt;&lt;10)+(i-56320),n++),o+=a&lt;128?1:a&lt;2048?2:a&lt;65536?3:4;for(e=new l.Buf8(o),n=r=0;r&lt;o;n++)55296==(64512&amp;(a=t.charCodeAt(n)))&amp;&amp;n+1&lt;s&amp;&amp;56320==(64512&amp;(i=t.charCodeAt(n+1)))&amp;&amp;(a=65536+(a-55296&lt;&lt;10)+(i-56320),n++),a&lt;128?e[r++]=a:(a&lt;2048?e[r++]=192|a&gt;&gt;&gt;6:(a&lt;65536?e[r++]=224|a&gt;&gt;&gt;12:(e[r++]=240|a&gt;&gt;&gt;18,e[r++]=128|a&gt;&gt;&gt;12&amp;63),e[r++]=128|a&gt;&gt;&gt;6&amp;63),e[r++]=128|63&amp;a);return e},a.buf2binstring=function(t){return d(t,t.length)},a.binstring2buf=function(t){for(var e=new l.Buf8(t.length),a=0,i=e.length;a&lt;i;a++)e[a]=t.charCodeAt(a);return e},a.buf2string=function(t,e){var a,i,n,r,s=e||t.length,o=new Array(2*s);for(a=i=0;a&lt;s;)if((n=t[a++])&lt;128)o[i++]=n;else if(4&lt;(r=h[n]))o[i++]=65533,a+=r-1;else{for(n&amp;=2===r?31:3===r?15:7;1&lt;r&amp;&amp;a&lt;s;)n=n&lt;&lt;6|63&amp;t[a++],r--;1&lt;r?o[i++]=65533:n&lt;65536?o[i++]=n:(n-=65536,o[i++]=55296|n&gt;&gt;10&amp;1023,o[i++]=56320|1023&amp;n)}return d(o,i)},a.utf8border=function(t,e){var a;for((e=e||t.length)&gt;t.length&amp;&amp;(e=t.length),a=e-1;0&lt;=a&amp;&amp;128==(192&amp;t[a]);)a--;return a&lt;0?e:0===a?e:a+h[t[a]]&gt;e?a:e}},{&quot;./common&quot;:3}],5:[function(t,e,a){&quot;use strict&quot;;e.exports=function(t,e,a,i){for(var n=65535&amp;t|0,r=t&gt;&gt;&gt;16&amp;65535|0,s=0;0!==a;){for(a-=s=2e3&lt;a?2e3:a;r=r+(n=n+e[i++]|0)|0,--s;);n%=65521,r%=65521}return n|r&lt;&lt;16|0}},{}],6:[function(t,e,a){&quot;use strict&quot;;e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],7:[function(t,e,a){&quot;use strict&quot;;var o=function(){for(var t,e=[],a=0;a&lt;256;a++){t=a;for(var i=0;i&lt;8;i++)t=1&amp;t?3988292384^t&gt;&gt;&gt;1:t&gt;&gt;&gt;1;e[a]=t}return e}();e.exports=function(t,e,a,i){var n=o,r=i+a;t^=-1;for(var s=i;s&lt;r;s++)t=t&gt;&gt;&gt;8^n[255&amp;(t^e[s])];return-1^t}},{}],8:[function(t,e,a){&quot;use strict&quot;;var l,_=t(&quot;../utils/common&quot;),h=t(&quot;./trees&quot;),u=t(&quot;./adler32&quot;),c=t(&quot;./crc32&quot;),i=t(&quot;./messages&quot;),d=0,f=4,b=0,g=-2,m=-1,w=4,n=2,p=8,v=9,r=286,s=30,o=19,k=2*r+1,y=15,x=3,z=258,B=z+x+1,S=42,E=113,A=1,Z=2,R=3,C=4;function N(t,e){return t.msg=i[e],e}function O(t){return(t&lt;&lt;1)-(4&lt;t?9:0)}function D(t){for(var e=t.length;0&lt;=--e;)t[e]=0}function I(t){var e=t.state,a=e.pending;a&gt;t.avail_out&amp;&amp;(a=t.avail_out),0!==a&amp;&amp;(_.arraySet(t.output,e.pending_buf,e.pending_out,a,t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&amp;&amp;(e.pending_out=0))}function U(t,e){h._tr_flush_block(t,0&lt;=t.block_start?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,I(t.strm)}function T(t,e){t.pending_buf[t.pending++]=e}function F(t,e){t.pending_buf[t.pending++]=e&gt;&gt;&gt;8&amp;255,t.pending_buf[t.pending++]=255&amp;e}function L(t,e){var a,i,n=t.max_chain_length,r=t.strstart,s=t.prev_length,o=t.nice_match,l=t.strstart&gt;t.w_size-B?t.strstart-(t.w_size-B):0,h=t.window,d=t.w_mask,f=t.prev,_=t.strstart+z,u=h[r+s-1],c=h[r+s];t.prev_length&gt;=t.good_match&amp;&amp;(n&gt;&gt;=2),o&gt;t.lookahead&amp;&amp;(o=t.lookahead);do{if(h[(a=e)+s]===c&amp;&amp;h[a+s-1]===u&amp;&amp;h[a]===h[r]&amp;&amp;h[++a]===h[r+1]){r+=2,a++;do{}while(h[++r]===h[++a]&amp;&amp;h[++r]===h[++a]&amp;&amp;h[++r]===h[++a]&amp;&amp;h[++r]===h[++a]&amp;&amp;h[++r]===h[++a]&amp;&amp;h[++r]===h[++a]&amp;&amp;h[++r]===h[++a]&amp;&amp;h[++r]===h[++a]&amp;&amp;r&lt;_);if(i=z-(_-r),r=_-z,s&lt;i){if(t.match_start=e,o&lt;=(s=i))break;u=h[r+s-1],c=h[r+s]}}}while((e=f[e&amp;d])&gt;l&amp;&amp;0!=--n);return s&lt;=t.lookahead?s:t.lookahead}function H(t){var e,a,i,n,r,s,o,l,h,d,f=t.w_size;do{if(n=t.window_size-t.lookahead-t.strstart,t.strstart&gt;=f+(f-B)){for(_.arraySet(t.window,t.window,f,f,0),t.match_start-=f,t.strstart-=f,t.block_start-=f,e=a=t.hash_size;i=t.head[--e],t.head[e]=f&lt;=i?i-f:0,--a;);for(e=a=f;i=t.prev[--e],t.prev[e]=f&lt;=i?i-f:0,--a;);n+=f}if(0===t.strm.avail_in)break;if(s=t.strm,o=t.window,l=t.strstart+t.lookahead,h=n,d=void 0,d=s.avail_in,h&lt;d&amp;&amp;(d=h),a=0===d?0:(s.avail_in-=d,_.arraySet(o,s.input,s.next_in,d,l),1===s.state.wrap?s.adler=u(s.adler,o,d,l):2===s.state.wrap&amp;&amp;(s.adler=c(s.adler,o,d,l)),s.next_in+=d,s.total_in+=d,d),t.lookahead+=a,t.lookahead+t.insert&gt;=x)for(r=t.strstart-t.insert,t.ins_h=t.window[r],t.ins_h=(t.ins_h&lt;&lt;t.hash_shift^t.window[r+1])&amp;t.hash_mask;t.insert&amp;&amp;(t.ins_h=(t.ins_h&lt;&lt;t.hash_shift^t.window[r+x-1])&amp;t.hash_mask,t.prev[r&amp;t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=r,r++,t.insert--,!(t.lookahead+t.insert&lt;x)););}while(t.lookahead&lt;B&amp;&amp;0!==t.strm.avail_in)}function j(t,e){for(var a,i;;){if(t.lookahead&lt;B){if(H(t),t.lookahead&lt;B&amp;&amp;e===d)return A;if(0===t.lookahead)break}if(a=0,t.lookahead&gt;=x&amp;&amp;(t.ins_h=(t.ins_h&lt;&lt;t.hash_shift^t.window[t.strstart+x-1])&amp;t.hash_mask,a=t.prev[t.strstart&amp;t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&amp;&amp;t.strstart-a&lt;=t.w_size-B&amp;&amp;(t.match_length=L(t,a)),t.match_length&gt;=x)if(i=h._tr_tally(t,t.strstart-t.match_start,t.match_length-x),t.lookahead-=t.match_length,t.match_length&lt;=t.max_lazy_match&amp;&amp;t.lookahead&gt;=x){for(t.match_length--;t.strstart++,t.ins_h=(t.ins_h&lt;&lt;t.hash_shift^t.window[t.strstart+x-1])&amp;t.hash_mask,a=t.prev[t.strstart&amp;t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart,0!=--t.match_length;);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h&lt;&lt;t.hash_shift^t.window[t.strstart+1])&amp;t.hash_mask;else i=h._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&amp;&amp;(U(t,!1),0===t.strm.avail_out))return A}return t.insert=t.strstart&lt;x-1?t.strstart:x-1,e===f?(U(t,!0),0===t.strm.avail_out?R:C):t.last_lit&amp;&amp;(U(t,!1),0===t.strm.avail_out)?A:Z}function K(t,e){for(var a,i,n;;){if(t.lookahead&lt;B){if(H(t),t.lookahead&lt;B&amp;&amp;e===d)return A;if(0===t.lookahead)break}if(a=0,t.lookahead&gt;=x&amp;&amp;(t.ins_h=(t.ins_h&lt;&lt;t.hash_shift^t.window[t.strstart+x-1])&amp;t.hash_mask,a=t.prev[t.strstart&amp;t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=x-1,0!==a&amp;&amp;t.prev_length&lt;t.max_lazy_match&amp;&amp;t.strstart-a&lt;=t.w_size-B&amp;&amp;(t.match_length=L(t,a),t.match_length&lt;=5&amp;&amp;(1===t.strategy||t.match_length===x&amp;&amp;4096&lt;t.strstart-t.match_start)&amp;&amp;(t.match_length=x-1)),t.prev_length&gt;=x&amp;&amp;t.match_length&lt;=t.prev_length){for(n=t.strstart+t.lookahead-x,i=h._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-x),t.lookahead-=t.prev_length-1,t.prev_length-=2;++t.strstart&lt;=n&amp;&amp;(t.ins_h=(t.ins_h&lt;&lt;t.hash_shift^t.window[t.strstart+x-1])&amp;t.hash_mask,a=t.prev[t.strstart&amp;t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!=--t.prev_length;);if(t.match_available=0,t.match_length=x-1,t.strstart++,i&amp;&amp;(U(t,!1),0===t.strm.avail_out))return A}else if(t.match_available){if((i=h._tr_tally(t,0,t.window[t.strstart-1]))&amp;&amp;U(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return A}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&amp;&amp;(i=h._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart&lt;x-1?t.strstart:x-1,e===f?(U(t,!0),0===t.strm.avail_out?R:C):t.last_lit&amp;&amp;(U(t,!1),0===t.strm.avail_out)?A:Z}function M(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}function P(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=p,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new _.Buf16(2*k),this.dyn_dtree=new _.Buf16(2*(2*s+1)),this.bl_tree=new _.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new _.Buf16(y+1),this.heap=new _.Buf16(2*r+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new _.Buf16(2*r+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Y(t){var e;return t&amp;&amp;t.state?(t.total_in=t.total_out=0,t.data_type=n,(e=t.state).pending=0,e.pending_out=0,e.wrap&lt;0&amp;&amp;(e.wrap=-e.wrap),e.status=e.wrap?S:E,t.adler=2===e.wrap?0:1,e.last_flush=d,h._tr_init(e),b):N(t,g)}function q(t){var e,a=Y(t);return a===b&amp;&amp;((e=t.state).window_size=2*e.w_size,D(e.head),e.max_lazy_match=l[e.level].max_lazy,e.good_match=l[e.level].good_length,e.nice_match=l[e.level].nice_length,e.max_chain_length=l[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=x-1,e.match_available=0,e.ins_h=0),a}function G(t,e,a,i,n,r){if(!t)return g;var s=1;if(e===m&amp;&amp;(e=6),i&lt;0?(s=0,i=-i):15&lt;i&amp;&amp;(s=2,i-=16),n&lt;1||v&lt;n||a!==p||i&lt;8||15&lt;i||e&lt;0||9&lt;e||r&lt;0||w&lt;r)return N(t,g);8===i&amp;&amp;(i=9);var o=new P;return(t.state=o).strm=t,o.wrap=s,o.gzhead=null,o.w_bits=i,o.w_size=1&lt;&lt;o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1&lt;&lt;o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new _.Buf8(2*o.w_size),o.head=new _.Buf16(o.hash_size),o.prev=new _.Buf16(o.w_size),o.lit_bufsize=1&lt;&lt;n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new _.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=e,o.strategy=r,o.method=a,q(t)}l=[new M(0,0,0,0,function(t,e){var a=65535;for(a&gt;t.pending_buf_size-5&amp;&amp;(a=t.pending_buf_size-5);;){if(t.lookahead&lt;=1){if(H(t),0===t.lookahead&amp;&amp;e===d)return A;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var i=t.block_start+a;if((0===t.strstart||t.strstart&gt;=i)&amp;&amp;(t.lookahead=t.strstart-i,t.strstart=i,U(t,!1),0===t.strm.avail_out))return A;if(t.strstart-t.block_start&gt;=t.w_size-B&amp;&amp;(U(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(U(t,!0),0===t.strm.avail_out?R:C):(t.strstart&gt;t.block_start&amp;&amp;(U(t,!1),t.strm.avail_out),A)}),new M(4,4,8,4,j),new M(4,5,16,8,j),new M(4,6,32,32,j),new M(4,4,16,16,K),new M(8,16,32,32,K),new M(8,16,128,128,K),new M(8,32,128,256,K),new M(32,128,258,1024,K),new M(32,258,258,4096,K)],a.deflateInit=function(t,e){return G(t,e,p,15,8,0)},a.deflateInit2=G,a.deflateReset=q,a.deflateResetKeep=Y,a.deflateSetHeader=function(t,e){return t&amp;&amp;t.state?2!==t.state.wrap?g:(t.state.gzhead=e,b):g},a.deflate=function(t,e){var a,i,n,r;if(!t||!t.state||5&lt;e||e&lt;0)return t?N(t,g):g;if(i=t.state,!t.output||!t.input&amp;&amp;0!==t.avail_in||666===i.status&amp;&amp;e!==f)return N(t,0===t.avail_out?-5:g);if(i.strm=t,a=i.last_flush,i.last_flush=e,i.status===S)if(2===i.wrap)t.adler=0,T(i,31),T(i,139),T(i,8),i.gzhead?(T(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),T(i,255&amp;i.gzhead.time),T(i,i.gzhead.time&gt;&gt;8&amp;255),T(i,i.gzhead.time&gt;&gt;16&amp;255),T(i,i.gzhead.time&gt;&gt;24&amp;255),T(i,9===i.level?2:2&lt;=i.strategy||i.level&lt;2?4:0),T(i,255&amp;i.gzhead.os),i.gzhead.extra&amp;&amp;i.gzhead.extra.length&amp;&amp;(T(i,255&amp;i.gzhead.extra.length),T(i,i.gzhead.extra.length&gt;&gt;8&amp;255)),i.gzhead.hcrc&amp;&amp;(t.adler=c(t.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(T(i,0),T(i,0),T(i,0),T(i,0),T(i,0),T(i,9===i.level?2:2&lt;=i.strategy||i.level&lt;2?4:0),T(i,3),i.status=E);else{var s=p+(i.w_bits-8&lt;&lt;4)&lt;&lt;8;s|=(2&lt;=i.strategy||i.level&lt;2?0:i.level&lt;6?1:6===i.level?2:3)&lt;&lt;6,0!==i.strstart&amp;&amp;(s|=32),s+=31-s%31,i.status=E,F(i,s),0!==i.strstart&amp;&amp;(F(i,t.adler&gt;&gt;&gt;16),F(i,65535&amp;t.adler)),t.adler=1}if(69===i.status)if(i.gzhead.extra){for(n=i.pending;i.gzindex&lt;(65535&amp;i.gzhead.extra.length)&amp;&amp;(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&amp;&amp;i.pending&gt;n&amp;&amp;(t.adler=c(t.adler,i.pending_buf,i.pending-n,n)),I(t),n=i.pending,i.pending!==i.pending_buf_size));)T(i,255&amp;i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&amp;&amp;i.pending&gt;n&amp;&amp;(t.adler=c(t.adler,i.pending_buf,i.pending-n,n)),i.gzindex===i.gzhead.extra.length&amp;&amp;(i.gzindex=0,i.status=73)}else i.status=73;if(73===i.status)if(i.gzhead.name){n=i.pending;do{if(i.pending===i.pending_buf_size&amp;&amp;(i.gzhead.hcrc&amp;&amp;i.pending&gt;n&amp;&amp;(t.adler=c(t.adler,i.pending_buf,i.pending-n,n)),I(t),n=i.pending,i.pending===i.pending_buf_size)){r=1;break}T(i,r=i.gzindex&lt;i.gzhead.name.length?255&amp;i.gzhead.name.charCodeAt(i.gzindex++):0)}while(0!==r);i.gzhead.hcrc&amp;&amp;i.pending&gt;n&amp;&amp;(t.adler=c(t.adler,i.pending_buf,i.pending-n,n)),0===r&amp;&amp;(i.gzindex=0,i.status=91)}else i.status=91;if(91===i.status)if(i.gzhead.comment){n=i.pending;do{if(i.pending===i.pending_buf_size&amp;&amp;(i.gzhead.hcrc&amp;&amp;i.pending&gt;n&amp;&amp;(t.adler=c(t.adler,i.pending_buf,i.pending-n,n)),I(t),n=i.pending,i.pending===i.pending_buf_size)){r=1;break}T(i,r=i.gzindex&lt;i.gzhead.comment.length?255&amp;i.gzhead.comment.charCodeAt(i.gzindex++):0)}while(0!==r);i.gzhead.hcrc&amp;&amp;i.pending&gt;n&amp;&amp;(t.adler=c(t.adler,i.pending_buf,i.pending-n,n)),0===r&amp;&amp;(i.status=103)}else i.status=103;if(103===i.status&amp;&amp;(i.gzhead.hcrc?(i.pending+2&gt;i.pending_buf_size&amp;&amp;I(t),i.pending+2&lt;=i.pending_buf_size&amp;&amp;(T(i,255&amp;t.adler),T(i,t.adler&gt;&gt;8&amp;255),t.adler=0,i.status=E)):i.status=E),0!==i.pending){if(I(t),0===t.avail_out)return i.last_flush=-1,b}else if(0===t.avail_in&amp;&amp;O(e)&lt;=O(a)&amp;&amp;e!==f)return N(t,-5);if(666===i.status&amp;&amp;0!==t.avail_in)return N(t,-5);if(0!==t.avail_in||0!==i.lookahead||e!==d&amp;&amp;666!==i.status){var o=2===i.strategy?function(t,e){for(var a;;){if(0===t.lookahead&amp;&amp;(H(t),0===t.lookahead)){if(e===d)return A;break}if(t.match_length=0,a=h._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&amp;&amp;(U(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(U(t,!0),0===t.strm.avail_out?R:C):t.last_lit&amp;&amp;(U(t,!1),0===t.strm.avail_out)?A:Z}(i,e):3===i.strategy?function(t,e){for(var a,i,n,r,s=t.window;;){if(t.lookahead&lt;=z){if(H(t),t.lookahead&lt;=z&amp;&amp;e===d)return A;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead&gt;=x&amp;&amp;0&lt;t.strstart&amp;&amp;(i=s[n=t.strstart-1])===s[++n]&amp;&amp;i===s[++n]&amp;&amp;i===s[++n]){r=t.strstart+z;do{}while(i===s[++n]&amp;&amp;i===s[++n]&amp;&amp;i===s[++n]&amp;&amp;i===s[++n]&amp;&amp;i===s[++n]&amp;&amp;i===s[++n]&amp;&amp;i===s[++n]&amp;&amp;i===s[++n]&amp;&amp;n&lt;r);t.match_length=z-(r-n),t.match_length&gt;t.lookahead&amp;&amp;(t.match_length=t.lookahead)}if(t.match_length&gt;=x?(a=h._tr_tally(t,1,t.match_length-x),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=h._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&amp;&amp;(U(t,!1),0===t.strm.avail_out))return A}return t.insert=0,e===f?(U(t,!0),0===t.strm.avail_out?R:C):t.last_lit&amp;&amp;(U(t,!1),0===t.strm.avail_out)?A:Z}(i,e):l[i.level].func(i,e);if(o!==R&amp;&amp;o!==C||(i.status=666),o===A||o===R)return 0===t.avail_out&amp;&amp;(i.last_flush=-1),b;if(o===Z&amp;&amp;(1===e?h._tr_align(i):5!==e&amp;&amp;(h._tr_stored_block(i,0,0,!1),3===e&amp;&amp;(D(i.head),0===i.lookahead&amp;&amp;(i.strstart=0,i.block_start=0,i.insert=0))),I(t),0===t.avail_out))return i.last_flush=-1,b}return e!==f?b:i.wrap&lt;=0?1:(2===i.wrap?(T(i,255&amp;t.adler),T(i,t.adler&gt;&gt;8&amp;255),T(i,t.adler&gt;&gt;16&amp;255),T(i,t.adler&gt;&gt;24&amp;255),T(i,255&amp;t.total_in),T(i,t.total_in&gt;&gt;8&amp;255),T(i,t.total_in&gt;&gt;16&amp;255),T(i,t.total_in&gt;&gt;24&amp;255)):(F(i,t.adler&gt;&gt;&gt;16),F(i,65535&amp;t.adler)),I(t),0&lt;i.wrap&amp;&amp;(i.wrap=-i.wrap),0!==i.pending?b:1)},a.deflateEnd=function(t){var e;return t&amp;&amp;t.state?(e=t.state.status)!==S&amp;&amp;69!==e&amp;&amp;73!==e&amp;&amp;91!==e&amp;&amp;103!==e&amp;&amp;e!==E&amp;&amp;666!==e?N(t,g):(t.state=null,e===E?N(t,-3):b):g},a.deflateSetDictionary=function(t,e){var a,i,n,r,s,o,l,h,d=e.length;if(!t||!t.state)return g;if(2===(r=(a=t.state).wrap)||1===r&amp;&amp;a.status!==S||a.lookahead)return g;for(1===r&amp;&amp;(t.adler=u(t.adler,e,d,0)),a.wrap=0,d&gt;=a.w_size&amp;&amp;(0===r&amp;&amp;(D(a.head),a.strstart=0,a.block_start=0,a.insert=0),h=new _.Buf8(a.w_size),_.arraySet(h,e,d-a.w_size,a.w_size,0),e=h,d=a.w_size),s=t.avail_in,o=t.next_in,l=t.input,t.avail_in=d,t.next_in=0,t.input=e,H(a);a.lookahead&gt;=x;){for(i=a.strstart,n=a.lookahead-(x-1);a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[i+x-1])&amp;a.hash_mask,a.prev[i&amp;a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=i,i++,--n;);a.strstart=i,a.lookahead=x-1,H(a)}return a.strstart+=a.lookahead,a.block_start=a.strstart,a.insert=a.lookahead,a.lookahead=0,a.match_length=a.prev_length=x-1,a.match_available=0,t.next_in=o,t.input=l,t.avail_in=s,a.wrap=r,b},a.deflateInfo=&quot;pako deflate (from Nodeca project)&quot;},{&quot;../utils/common&quot;:3,&quot;./adler32&quot;:5,&quot;./crc32&quot;:7,&quot;./messages&quot;:13,&quot;./trees&quot;:14}],9:[function(t,e,a){&quot;use strict&quot;;e.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=&quot;&quot;,this.comment=&quot;&quot;,this.hcrc=0,this.done=!1}},{}],10:[function(t,e,a){&quot;use strict&quot;;e.exports=function(t,e){var a,i,n,r,s,o,l,h,d,f,_,u,c,b,g,m,w,p,v,k,y,x,z,B,S;a=t.state,i=t.next_in,B=t.input,n=i+(t.avail_in-5),r=t.next_out,S=t.output,s=r-(e-t.avail_out),o=r+(t.avail_out-257),l=a.dmax,h=a.wsize,d=a.whave,f=a.wnext,_=a.window,u=a.hold,c=a.bits,b=a.lencode,g=a.distcode,m=(1&lt;&lt;a.lenbits)-1,w=(1&lt;&lt;a.distbits)-1;t:do{c&lt;15&amp;&amp;(u+=B[i++]&lt;&lt;c,c+=8,u+=B[i++]&lt;&lt;c,c+=8),p=b[u&amp;m];e:for(;;){if(u&gt;&gt;&gt;=v=p&gt;&gt;&gt;24,c-=v,0===(v=p&gt;&gt;&gt;16&amp;255))S[r++]=65535&amp;p;else{if(!(16&amp;v)){if(0==(64&amp;v)){p=b[(65535&amp;p)+(u&amp;(1&lt;&lt;v)-1)];continue e}if(32&amp;v){a.mode=12;break t}t.msg=&quot;invalid literal/length code&quot;,a.mode=30;break t}k=65535&amp;p,(v&amp;=15)&amp;&amp;(c&lt;v&amp;&amp;(u+=B[i++]&lt;&lt;c,c+=8),k+=u&amp;(1&lt;&lt;v)-1,u&gt;&gt;&gt;=v,c-=v),c&lt;15&amp;&amp;(u+=B[i++]&lt;&lt;c,c+=8,u+=B[i++]&lt;&lt;c,c+=8),p=g[u&amp;w];a:for(;;){if(u&gt;&gt;&gt;=v=p&gt;&gt;&gt;24,c-=v,!(16&amp;(v=p&gt;&gt;&gt;16&amp;255))){if(0==(64&amp;v)){p=g[(65535&amp;p)+(u&amp;(1&lt;&lt;v)-1)];continue a}t.msg=&quot;invalid distance code&quot;,a.mode=30;break t}if(y=65535&amp;p,c&lt;(v&amp;=15)&amp;&amp;(u+=B[i++]&lt;&lt;c,(c+=8)&lt;v&amp;&amp;(u+=B[i++]&lt;&lt;c,c+=8)),l&lt;(y+=u&amp;(1&lt;&lt;v)-1)){t.msg=&quot;invalid distance too far back&quot;,a.mode=30;break t}if(u&gt;&gt;&gt;=v,c-=v,(v=r-s)&lt;y){if(d&lt;(v=y-v)&amp;&amp;a.sane){t.msg=&quot;invalid distance too far back&quot;,a.mode=30;break t}if(z=_,(x=0)===f){if(x+=h-v,v&lt;k){for(k-=v;S[r++]=_[x++],--v;);x=r-y,z=S}}else if(f&lt;v){if(x+=h+f-v,(v-=f)&lt;k){for(k-=v;S[r++]=_[x++],--v;);if(x=0,f&lt;k){for(k-=v=f;S[r++]=_[x++],--v;);x=r-y,z=S}}}else if(x+=f-v,v&lt;k){for(k-=v;S[r++]=_[x++],--v;);x=r-y,z=S}for(;2&lt;k;)S[r++]=z[x++],S[r++]=z[x++],S[r++]=z[x++],k-=3;k&amp;&amp;(S[r++]=z[x++],1&lt;k&amp;&amp;(S[r++]=z[x++]))}else{for(x=r-y;S[r++]=S[x++],S[r++]=S[x++],S[r++]=S[x++],2&lt;(k-=3););k&amp;&amp;(S[r++]=S[x++],1&lt;k&amp;&amp;(S[r++]=S[x++]))}break}}break}}while(i&lt;n&amp;&amp;r&lt;o);i-=k=c&gt;&gt;3,u&amp;=(1&lt;&lt;(c-=k&lt;&lt;3))-1,t.next_in=i,t.next_out=r,t.avail_in=i&lt;n?n-i+5:5-(i-n),t.avail_out=r&lt;o?o-r+257:257-(r-o),a.hold=u,a.bits=c}},{}],11:[function(t,e,a){&quot;use strict&quot;;var Z=t(&quot;../utils/common&quot;),R=t(&quot;./adler32&quot;),C=t(&quot;./crc32&quot;),N=t(&quot;./inffast&quot;),O=t(&quot;./inftrees&quot;),D=1,I=2,U=0,T=-2,F=1,i=852,n=592;function L(t){return(t&gt;&gt;&gt;24&amp;255)+(t&gt;&gt;&gt;8&amp;65280)+((65280&amp;t)&lt;&lt;8)+((255&amp;t)&lt;&lt;24)}function r(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Z.Buf16(320),this.work=new Z.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function s(t){var e;return t&amp;&amp;t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg=&quot;&quot;,e.wrap&amp;&amp;(t.adler=1&amp;e.wrap),e.mode=F,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Z.Buf32(i),e.distcode=e.distdyn=new Z.Buf32(n),e.sane=1,e.back=-1,U):T}function o(t){var e;return t&amp;&amp;t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,s(t)):T}function l(t,e){var a,i;return t&amp;&amp;t.state?(i=t.state,e&lt;0?(a=0,e=-e):(a=1+(e&gt;&gt;4),e&lt;48&amp;&amp;(e&amp;=15)),e&amp;&amp;(e&lt;8||15&lt;e)?T:(null!==i.window&amp;&amp;i.wbits!==e&amp;&amp;(i.window=null),i.wrap=a,i.wbits=e,o(t))):T}function h(t,e){var a,i;return t?(i=new r,(t.state=i).window=null,(a=l(t,e))!==U&amp;&amp;(t.state=null),a):T}var d,f,_=!0;function H(t){if(_){var e;for(d=new Z.Buf32(512),f=new Z.Buf32(32),e=0;e&lt;144;)t.lens[e++]=8;for(;e&lt;256;)t.lens[e++]=9;for(;e&lt;280;)t.lens[e++]=7;for(;e&lt;288;)t.lens[e++]=8;for(O(D,t.lens,0,288,d,0,t.work,{bits:9}),e=0;e&lt;32;)t.lens[e++]=5;O(I,t.lens,0,32,f,0,t.work,{bits:5}),_=!1}t.lencode=d,t.lenbits=9,t.distcode=f,t.distbits=5}function j(t,e,a,i){var n,r=t.state;return null===r.window&amp;&amp;(r.wsize=1&lt;&lt;r.wbits,r.wnext=0,r.whave=0,r.window=new Z.Buf8(r.wsize)),i&gt;=r.wsize?(Z.arraySet(r.window,e,a-r.wsize,r.wsize,0),r.wnext=0,r.whave=r.wsize):(i&lt;(n=r.wsize-r.wnext)&amp;&amp;(n=i),Z.arraySet(r.window,e,a-i,n,r.wnext),(i-=n)?(Z.arraySet(r.window,e,a-i,i,0),r.wnext=i,r.whave=r.wsize):(r.wnext+=n,r.wnext===r.wsize&amp;&amp;(r.wnext=0),r.whave&lt;r.wsize&amp;&amp;(r.whave+=n))),0}a.inflateReset=o,a.inflateReset2=l,a.inflateResetKeep=s,a.inflateInit=function(t){return h(t,15)},a.inflateInit2=h,a.inflate=function(t,e){var a,i,n,r,s,o,l,h,d,f,_,u,c,b,g,m,w,p,v,k,y,x,z,B,S=0,E=new Z.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&amp;&amp;0!==t.avail_in)return T;12===(a=t.state).mode&amp;&amp;(a.mode=13),s=t.next_out,n=t.output,l=t.avail_out,r=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,f=o,_=l,x=U;t:for(;;)switch(a.mode){case F:if(0===a.wrap){a.mode=13;break}for(;d&lt;16;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}if(2&amp;a.wrap&amp;&amp;35615===h){E[a.check=0]=255&amp;h,E[1]=h&gt;&gt;&gt;8&amp;255,a.check=C(a.check,E,2,0),d=h=0,a.mode=2;break}if(a.flags=0,a.head&amp;&amp;(a.head.done=!1),!(1&amp;a.wrap)||(((255&amp;h)&lt;&lt;8)+(h&gt;&gt;8))%31){t.msg=&quot;incorrect header check&quot;,a.mode=30;break}if(8!=(15&amp;h)){t.msg=&quot;unknown compression method&quot;,a.mode=30;break}if(d-=4,y=8+(15&amp;(h&gt;&gt;&gt;=4)),0===a.wbits)a.wbits=y;else if(y&gt;a.wbits){t.msg=&quot;invalid window size&quot;,a.mode=30;break}a.dmax=1&lt;&lt;y,t.adler=a.check=1,a.mode=512&amp;h?10:12,d=h=0;break;case 2:for(;d&lt;16;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}if(a.flags=h,8!=(255&amp;a.flags)){t.msg=&quot;unknown compression method&quot;,a.mode=30;break}if(57344&amp;a.flags){t.msg=&quot;unknown header flags set&quot;,a.mode=30;break}a.head&amp;&amp;(a.head.text=h&gt;&gt;8&amp;1),512&amp;a.flags&amp;&amp;(E[0]=255&amp;h,E[1]=h&gt;&gt;&gt;8&amp;255,a.check=C(a.check,E,2,0)),d=h=0,a.mode=3;case 3:for(;d&lt;32;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}a.head&amp;&amp;(a.head.time=h),512&amp;a.flags&amp;&amp;(E[0]=255&amp;h,E[1]=h&gt;&gt;&gt;8&amp;255,E[2]=h&gt;&gt;&gt;16&amp;255,E[3]=h&gt;&gt;&gt;24&amp;255,a.check=C(a.check,E,4,0)),d=h=0,a.mode=4;case 4:for(;d&lt;16;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}a.head&amp;&amp;(a.head.xflags=255&amp;h,a.head.os=h&gt;&gt;8),512&amp;a.flags&amp;&amp;(E[0]=255&amp;h,E[1]=h&gt;&gt;&gt;8&amp;255,a.check=C(a.check,E,2,0)),d=h=0,a.mode=5;case 5:if(1024&amp;a.flags){for(;d&lt;16;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}a.length=h,a.head&amp;&amp;(a.head.extra_len=h),512&amp;a.flags&amp;&amp;(E[0]=255&amp;h,E[1]=h&gt;&gt;&gt;8&amp;255,a.check=C(a.check,E,2,0)),d=h=0}else a.head&amp;&amp;(a.head.extra=null);a.mode=6;case 6:if(1024&amp;a.flags&amp;&amp;(o&lt;(u=a.length)&amp;&amp;(u=o),u&amp;&amp;(a.head&amp;&amp;(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Array(a.head.extra_len)),Z.arraySet(a.head.extra,i,r,u,y)),512&amp;a.flags&amp;&amp;(a.check=C(a.check,i,u,r)),o-=u,r+=u,a.length-=u),a.length))break t;a.length=0,a.mode=7;case 7:if(2048&amp;a.flags){if(0===o)break t;for(u=0;y=i[r+u++],a.head&amp;&amp;y&amp;&amp;a.length&lt;65536&amp;&amp;(a.head.name+=String.fromCharCode(y)),y&amp;&amp;u&lt;o;);if(512&amp;a.flags&amp;&amp;(a.check=C(a.check,i,u,r)),o-=u,r+=u,y)break t}else a.head&amp;&amp;(a.head.name=null);a.length=0,a.mode=8;case 8:if(4096&amp;a.flags){if(0===o)break t;for(u=0;y=i[r+u++],a.head&amp;&amp;y&amp;&amp;a.length&lt;65536&amp;&amp;(a.head.comment+=String.fromCharCode(y)),y&amp;&amp;u&lt;o;);if(512&amp;a.flags&amp;&amp;(a.check=C(a.check,i,u,r)),o-=u,r+=u,y)break t}else a.head&amp;&amp;(a.head.comment=null);a.mode=9;case 9:if(512&amp;a.flags){for(;d&lt;16;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}if(h!==(65535&amp;a.check)){t.msg=&quot;header crc mismatch&quot;,a.mode=30;break}d=h=0}a.head&amp;&amp;(a.head.hcrc=a.flags&gt;&gt;9&amp;1,a.head.done=!0),t.adler=a.check=0,a.mode=12;break;case 10:for(;d&lt;32;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}t.adler=a.check=L(h),d=h=0,a.mode=11;case 11:if(0===a.havedict)return t.next_out=s,t.avail_out=l,t.next_in=r,t.avail_in=o,a.hold=h,a.bits=d,2;t.adler=a.check=1,a.mode=12;case 12:if(5===e||6===e)break t;case 13:if(a.last){h&gt;&gt;&gt;=7&amp;d,d-=7&amp;d,a.mode=27;break}for(;d&lt;3;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}switch(a.last=1&amp;h,d-=1,3&amp;(h&gt;&gt;&gt;=1)){case 0:a.mode=14;break;case 1:if(H(a),a.mode=20,6!==e)break;h&gt;&gt;&gt;=2,d-=2;break t;case 2:a.mode=17;break;case 3:t.msg=&quot;invalid block type&quot;,a.mode=30}h&gt;&gt;&gt;=2,d-=2;break;case 14:for(h&gt;&gt;&gt;=7&amp;d,d-=7&amp;d;d&lt;32;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}if((65535&amp;h)!=(h&gt;&gt;&gt;16^65535)){t.msg=&quot;invalid stored block lengths&quot;,a.mode=30;break}if(a.length=65535&amp;h,d=h=0,a.mode=15,6===e)break t;case 15:a.mode=16;case 16:if(u=a.length){if(o&lt;u&amp;&amp;(u=o),l&lt;u&amp;&amp;(u=l),0===u)break t;Z.arraySet(n,i,r,u,s),o-=u,r+=u,l-=u,s+=u,a.length-=u;break}a.mode=12;break;case 17:for(;d&lt;14;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}if(a.nlen=257+(31&amp;h),h&gt;&gt;&gt;=5,d-=5,a.ndist=1+(31&amp;h),h&gt;&gt;&gt;=5,d-=5,a.ncode=4+(15&amp;h),h&gt;&gt;&gt;=4,d-=4,286&lt;a.nlen||30&lt;a.ndist){t.msg=&quot;too many length or distance symbols&quot;,a.mode=30;break}a.have=0,a.mode=18;case 18:for(;a.have&lt;a.ncode;){for(;d&lt;3;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}a.lens[A[a.have++]]=7&amp;h,h&gt;&gt;&gt;=3,d-=3}for(;a.have&lt;19;)a.lens[A[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,z={bits:a.lenbits},x=O(0,a.lens,0,19,a.lencode,0,a.work,z),a.lenbits=z.bits,x){t.msg=&quot;invalid code lengths set&quot;,a.mode=30;break}a.have=0,a.mode=19;case 19:for(;a.have&lt;a.nlen+a.ndist;){for(;m=(S=a.lencode[h&amp;(1&lt;&lt;a.lenbits)-1])&gt;&gt;&gt;16&amp;255,w=65535&amp;S,!((g=S&gt;&gt;&gt;24)&lt;=d);){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}if(w&lt;16)h&gt;&gt;&gt;=g,d-=g,a.lens[a.have++]=w;else{if(16===w){for(B=g+2;d&lt;B;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}if(h&gt;&gt;&gt;=g,d-=g,0===a.have){t.msg=&quot;invalid bit length repeat&quot;,a.mode=30;break}y=a.lens[a.have-1],u=3+(3&amp;h),h&gt;&gt;&gt;=2,d-=2}else if(17===w){for(B=g+3;d&lt;B;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}d-=g,y=0,u=3+(7&amp;(h&gt;&gt;&gt;=g)),h&gt;&gt;&gt;=3,d-=3}else{for(B=g+7;d&lt;B;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}d-=g,y=0,u=11+(127&amp;(h&gt;&gt;&gt;=g)),h&gt;&gt;&gt;=7,d-=7}if(a.have+u&gt;a.nlen+a.ndist){t.msg=&quot;invalid bit length repeat&quot;,a.mode=30;break}for(;u--;)a.lens[a.have++]=y}}if(30===a.mode)break;if(0===a.lens[256]){t.msg=&quot;invalid code -- missing end-of-block&quot;,a.mode=30;break}if(a.lenbits=9,z={bits:a.lenbits},x=O(D,a.lens,0,a.nlen,a.lencode,0,a.work,z),a.lenbits=z.bits,x){t.msg=&quot;invalid literal/lengths set&quot;,a.mode=30;break}if(a.distbits=6,a.distcode=a.distdyn,z={bits:a.distbits},x=O(I,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,z),a.distbits=z.bits,x){t.msg=&quot;invalid distances set&quot;,a.mode=30;break}if(a.mode=20,6===e)break t;case 20:a.mode=21;case 21:if(6&lt;=o&amp;&amp;258&lt;=l){t.next_out=s,t.avail_out=l,t.next_in=r,t.avail_in=o,a.hold=h,a.bits=d,N(t,_),s=t.next_out,n=t.output,l=t.avail_out,r=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,12===a.mode&amp;&amp;(a.back=-1);break}for(a.back=0;m=(S=a.lencode[h&amp;(1&lt;&lt;a.lenbits)-1])&gt;&gt;&gt;16&amp;255,w=65535&amp;S,!((g=S&gt;&gt;&gt;24)&lt;=d);){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}if(m&amp;&amp;0==(240&amp;m)){for(p=g,v=m,k=w;m=(S=a.lencode[k+((h&amp;(1&lt;&lt;p+v)-1)&gt;&gt;p)])&gt;&gt;&gt;16&amp;255,w=65535&amp;S,!(p+(g=S&gt;&gt;&gt;24)&lt;=d);){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}h&gt;&gt;&gt;=p,d-=p,a.back+=p}if(h&gt;&gt;&gt;=g,d-=g,a.back+=g,a.length=w,0===m){a.mode=26;break}if(32&amp;m){a.back=-1,a.mode=12;break}if(64&amp;m){t.msg=&quot;invalid literal/length code&quot;,a.mode=30;break}a.extra=15&amp;m,a.mode=22;case 22:if(a.extra){for(B=a.extra;d&lt;B;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}a.length+=h&amp;(1&lt;&lt;a.extra)-1,h&gt;&gt;&gt;=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=23;case 23:for(;m=(S=a.distcode[h&amp;(1&lt;&lt;a.distbits)-1])&gt;&gt;&gt;16&amp;255,w=65535&amp;S,!((g=S&gt;&gt;&gt;24)&lt;=d);){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}if(0==(240&amp;m)){for(p=g,v=m,k=w;m=(S=a.distcode[k+((h&amp;(1&lt;&lt;p+v)-1)&gt;&gt;p)])&gt;&gt;&gt;16&amp;255,w=65535&amp;S,!(p+(g=S&gt;&gt;&gt;24)&lt;=d);){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}h&gt;&gt;&gt;=p,d-=p,a.back+=p}if(h&gt;&gt;&gt;=g,d-=g,a.back+=g,64&amp;m){t.msg=&quot;invalid distance code&quot;,a.mode=30;break}a.offset=w,a.extra=15&amp;m,a.mode=24;case 24:if(a.extra){for(B=a.extra;d&lt;B;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}a.offset+=h&amp;(1&lt;&lt;a.extra)-1,h&gt;&gt;&gt;=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset&gt;a.dmax){t.msg=&quot;invalid distance too far back&quot;,a.mode=30;break}a.mode=25;case 25:if(0===l)break t;if(u=_-l,a.offset&gt;u){if((u=a.offset-u)&gt;a.whave&amp;&amp;a.sane){t.msg=&quot;invalid distance too far back&quot;,a.mode=30;break}u&gt;a.wnext?(u-=a.wnext,c=a.wsize-u):c=a.wnext-u,u&gt;a.length&amp;&amp;(u=a.length),b=a.window}else b=n,c=s-a.offset,u=a.length;for(l&lt;u&amp;&amp;(u=l),l-=u,a.length-=u;n[s++]=b[c++],--u;);0===a.length&amp;&amp;(a.mode=21);break;case 26:if(0===l)break t;n[s++]=a.length,l--,a.mode=21;break;case 27:if(a.wrap){for(;d&lt;32;){if(0===o)break t;o--,h|=i[r++]&lt;&lt;d,d+=8}if(_-=l,t.total_out+=_,a.total+=_,_&amp;&amp;(t.adler=a.check=a.flags?C(a.check,n,_,s-_):R(a.check,n,_,s-_)),_=l,(a.flags?h:L(h))!==a.check){t.msg=&quot;incorrect data check&quot;,a.mode=30;break}d=h=0}a.mode=28;case 28:if(a.wrap&amp;&amp;a.flags){for(;d&lt;32;){if(0===o)break t;o--,h+=i[r++]&lt;&lt;d,d+=8}if(h!==(4294967295&amp;a.total)){t.msg=&quot;incorrect length check&quot;,a.mode=30;break}d=h=0}a.mode=29;case 29:x=1;break t;case 30:x=-3;break t;case 31:return-4;case 32:default:return T}return t.next_out=s,t.avail_out=l,t.next_in=r,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||_!==t.avail_out&amp;&amp;a.mode&lt;30&amp;&amp;(a.mode&lt;27||4!==e))&amp;&amp;j(t,t.output,t.next_out,_-t.avail_out)?(a.mode=31,-4):(f-=t.avail_in,_-=t.avail_out,t.total_in+=f,t.total_out+=_,a.total+=_,a.wrap&amp;&amp;_&amp;&amp;(t.adler=a.check=a.flags?C(a.check,n,_,t.next_out-_):R(a.check,n,_,t.next_out-_)),t.data_type=a.bits+(a.last?64:0)+(12===a.mode?128:0)+(20===a.mode||15===a.mode?256:0),(0===f&amp;&amp;0===_||4===e)&amp;&amp;x===U&amp;&amp;(x=-5),x)},a.inflateEnd=function(t){if(!t||!t.state)return T;var e=t.state;return e.window&amp;&amp;(e.window=null),t.state=null,U},a.inflateGetHeader=function(t,e){var a;return t&amp;&amp;t.state?0==(2&amp;(a=t.state).wrap)?T:((a.head=e).done=!1,U):T},a.inflateSetDictionary=function(t,e){var a,i=e.length;return t&amp;&amp;t.state?0!==(a=t.state).wrap&amp;&amp;11!==a.mode?T:11===a.mode&amp;&amp;R(1,e,i,0)!==a.check?-3:j(t,e,i,i)?(a.mode=31,-4):(a.havedict=1,U):T},a.inflateInfo=&quot;pako inflate (from Nodeca project)&quot;},{&quot;../utils/common&quot;:3,&quot;./adler32&quot;:5,&quot;./crc32&quot;:7,&quot;./inffast&quot;:10,&quot;./inftrees&quot;:12}],12:[function(t,e,a){&quot;use strict&quot;;var D=t(&quot;../utils/common&quot;),I=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],U=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],T=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],F=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,a,i,n,r,s,o){var l,h,d,f,_,u,c,b,g,m=o.bits,w=0,p=0,v=0,k=0,y=0,x=0,z=0,B=0,S=0,E=0,A=null,Z=0,R=new D.Buf16(16),C=new D.Buf16(16),N=null,O=0;for(w=0;w&lt;=15;w++)R[w]=0;for(p=0;p&lt;i;p++)R[e[a+p]]++;for(y=m,k=15;1&lt;=k&amp;&amp;0===R[k];k--);if(k&lt;y&amp;&amp;(y=k),0===k)return n[r++]=20971520,n[r++]=20971520,o.bits=1,0;for(v=1;v&lt;k&amp;&amp;0===R[v];v++);for(y&lt;v&amp;&amp;(y=v),w=B=1;w&lt;=15;w++)if(B&lt;&lt;=1,(B-=R[w])&lt;0)return-1;if(0&lt;B&amp;&amp;(0===t||1!==k))return-1;for(C[1]=0,w=1;w&lt;15;w++)C[w+1]=C[w]+R[w];for(p=0;p&lt;i;p++)0!==e[a+p]&amp;&amp;(s[C[e[a+p]]++]=p);if(0===t?(A=N=s,u=19):1===t?(A=I,Z-=257,N=U,O-=257,u=256):(A=T,N=F,u=-1),w=v,_=r,z=p=E=0,d=-1,f=(S=1&lt;&lt;(x=y))-1,1===t&amp;&amp;852&lt;S||2===t&amp;&amp;592&lt;S)return 1;for(;;){for(c=w-z,s[p]&lt;u?(b=0,g=s[p]):s[p]&gt;u?(b=N[O+s[p]],g=A[Z+s[p]]):(b=96,g=0),l=1&lt;&lt;w-z,v=h=1&lt;&lt;x;n[_+(E&gt;&gt;z)+(h-=l)]=c&lt;&lt;24|b&lt;&lt;16|g|0,0!==h;);for(l=1&lt;&lt;w-1;E&amp;l;)l&gt;&gt;=1;if(0!==l?(E&amp;=l-1,E+=l):E=0,p++,0==--R[w]){if(w===k)break;w=e[a+s[p]]}if(y&lt;w&amp;&amp;(E&amp;f)!==d){for(0===z&amp;&amp;(z=y),_+=v,B=1&lt;&lt;(x=w-z);x+z&lt;k&amp;&amp;!((B-=R[x+z])&lt;=0);)x++,B&lt;&lt;=1;if(S+=1&lt;&lt;x,1===t&amp;&amp;852&lt;S||2===t&amp;&amp;592&lt;S)return 1;n[d=E&amp;f]=y&lt;&lt;24|x&lt;&lt;16|_-r|0}}return 0!==E&amp;&amp;(n[_+E]=w-z&lt;&lt;24|64&lt;&lt;16|0),o.bits=y,0}},{&quot;../utils/common&quot;:3}],13:[function(t,e,a){&quot;use strict&quot;;e.exports={2:&quot;need dictionary&quot;,1:&quot;stream end&quot;,0:&quot;&quot;,&quot;-1&quot;:&quot;file error&quot;,&quot;-2&quot;:&quot;stream error&quot;,&quot;-3&quot;:&quot;data error&quot;,&quot;-4&quot;:&quot;insufficient memory&quot;,&quot;-5&quot;:&quot;buffer error&quot;,&quot;-6&quot;:&quot;incompatible version&quot;}},{}],14:[function(t,e,a){&quot;use strict&quot;;var l=t(&quot;../utils/common&quot;),o=0,h=1;function i(t){for(var e=t.length;0&lt;=--e;)t[e]=0}var d=0,s=29,f=256,_=f+1+s,u=30,c=19,g=2*_+1,m=15,n=16,b=7,w=256,p=16,v=17,k=18,y=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],x=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],z=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],B=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S=new Array(2*(_+2));i(S);var E=new Array(2*u);i(E);var A=new Array(512);i(A);var Z=new Array(256);i(Z);var R=new Array(s);i(R);var C,N,O,D=new Array(u);function I(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&amp;&amp;t.length}function r(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function U(t){return t&lt;256?A[t]:A[256+(t&gt;&gt;&gt;7)]}function T(t,e){t.pending_buf[t.pending++]=255&amp;e,t.pending_buf[t.pending++]=e&gt;&gt;&gt;8&amp;255}function F(t,e,a){t.bi_valid&gt;n-a?(t.bi_buf|=e&lt;&lt;t.bi_valid&amp;65535,T(t,t.bi_buf),t.bi_buf=e&gt;&gt;n-t.bi_valid,t.bi_valid+=a-n):(t.bi_buf|=e&lt;&lt;t.bi_valid&amp;65535,t.bi_valid+=a)}function L(t,e,a){F(t,a[2*e],a[2*e+1])}function H(t,e){for(var a=0;a|=1&amp;t,t&gt;&gt;&gt;=1,a&lt;&lt;=1,0&lt;--e;);return a&gt;&gt;&gt;1}function j(t,e,a){var i,n,r=new Array(m+1),s=0;for(i=1;i&lt;=m;i++)r[i]=s=s+a[i-1]&lt;&lt;1;for(n=0;n&lt;=e;n++){var o=t[2*n+1];0!==o&amp;&amp;(t[2*n]=H(r[o]++,o))}}function K(t){var e;for(e=0;e&lt;_;e++)t.dyn_ltree[2*e]=0;for(e=0;e&lt;u;e++)t.dyn_dtree[2*e]=0;for(e=0;e&lt;c;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*w]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function M(t){8&lt;t.bi_valid?T(t,t.bi_buf):0&lt;t.bi_valid&amp;&amp;(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function P(t,e,a,i){var n=2*e,r=2*a;return t[n]&lt;t[r]||t[n]===t[r]&amp;&amp;i[e]&lt;=i[a]}function Y(t,e,a){for(var i=t.heap[a],n=a&lt;&lt;1;n&lt;=t.heap_len&amp;&amp;(n&lt;t.heap_len&amp;&amp;P(e,t.heap[n+1],t.heap[n],t.depth)&amp;&amp;n++,!P(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n&lt;&lt;=1;t.heap[a]=i}function q(t,e,a){var i,n,r,s,o=0;if(0!==t.last_lit)for(;i=t.pending_buf[t.d_buf+2*o]&lt;&lt;8|t.pending_buf[t.d_buf+2*o+1],n=t.pending_buf[t.l_buf+o],o++,0===i?L(t,n,e):(L(t,(r=Z[n])+f+1,e),0!==(s=y[r])&amp;&amp;F(t,n-=R[r],s),L(t,r=U(--i),a),0!==(s=x[r])&amp;&amp;F(t,i-=D[r],s)),o&lt;t.last_lit;);L(t,w,e)}function G(t,e){var a,i,n,r=e.dyn_tree,s=e.stat_desc.static_tree,o=e.stat_desc.has_stree,l=e.stat_desc.elems,h=-1;for(t.heap_len=0,t.heap_max=g,a=0;a&lt;l;a++)0!==r[2*a]?(t.heap[++t.heap_len]=h=a,t.depth[a]=0):r[2*a+1]=0;for(;t.heap_len&lt;2;)r[2*(n=t.heap[++t.heap_len]=h&lt;2?++h:0)]=1,t.depth[n]=0,t.opt_len--,o&amp;&amp;(t.static_len-=s[2*n+1]);for(e.max_code=h,a=t.heap_len&gt;&gt;1;1&lt;=a;a--)Y(t,r,a);for(n=l;a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],Y(t,r,1),i=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=i,r[2*n]=r[2*a]+r[2*i],t.depth[n]=(t.depth[a]&gt;=t.depth[i]?t.depth[a]:t.depth[i])+1,r[2*a+1]=r[2*i+1]=n,t.heap[1]=n++,Y(t,r,1),2&lt;=t.heap_len;);t.heap[--t.heap_max]=t.heap[1],function(t,e){var a,i,n,r,s,o,l=e.dyn_tree,h=e.max_code,d=e.stat_desc.static_tree,f=e.stat_desc.has_stree,_=e.stat_desc.extra_bits,u=e.stat_desc.extra_base,c=e.stat_desc.max_length,b=0;for(r=0;r&lt;=m;r++)t.bl_count[r]=0;for(l[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a&lt;g;a++)c&lt;(r=l[2*l[2*(i=t.heap[a])+1]+1]+1)&amp;&amp;(r=c,b++),l[2*i+1]=r,h&lt;i||(t.bl_count[r]++,s=0,u&lt;=i&amp;&amp;(s=_[i-u]),o=l[2*i],t.opt_len+=o*(r+s),f&amp;&amp;(t.static_len+=o*(d[2*i+1]+s)));if(0!==b){do{for(r=c-1;0===t.bl_count[r];)r--;t.bl_count[r]--,t.bl_count[r+1]+=2,t.bl_count[c]--,b-=2}while(0&lt;b);for(r=c;0!==r;r--)for(i=t.bl_count[r];0!==i;)h&lt;(n=t.heap[--a])||(l[2*n+1]!==r&amp;&amp;(t.opt_len+=(r-l[2*n+1])*l[2*n],l[2*n+1]=r),i--)}}(t,e),j(r,h,t.bl_count)}function X(t,e,a){var i,n,r=-1,s=e[1],o=0,l=7,h=4;for(0===s&amp;&amp;(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i&lt;=a;i++)n=s,s=e[2*(i+1)+1],++o&lt;l&amp;&amp;n===s||(o&lt;h?t.bl_tree[2*n]+=o:0!==n?(n!==r&amp;&amp;t.bl_tree[2*n]++,t.bl_tree[2*p]++):o&lt;=10?t.bl_tree[2*v]++:t.bl_tree[2*k]++,r=n,(o=0)===s?(l=138,h=3):n===s?(l=6,h=3):(l=7,h=4))}function W(t,e,a){var i,n,r=-1,s=e[1],o=0,l=7,h=4;for(0===s&amp;&amp;(l=138,h=3),i=0;i&lt;=a;i++)if(n=s,s=e[2*(i+1)+1],!(++o&lt;l&amp;&amp;n===s)){if(o&lt;h)for(;L(t,n,t.bl_tree),0!=--o;);else 0!==n?(n!==r&amp;&amp;(L(t,n,t.bl_tree),o--),L(t,p,t.bl_tree),F(t,o-3,2)):o&lt;=10?(L(t,v,t.bl_tree),F(t,o-3,3)):(L(t,k,t.bl_tree),F(t,o-11,7));r=n,(o=0)===s?(l=138,h=3):n===s?(l=6,h=3):(l=7,h=4)}}i(D);var J=!1;function Q(t,e,a,i){var n,r,s,o;F(t,(d&lt;&lt;1)+(i?1:0),3),r=e,s=a,o=!0,M(n=t),o&amp;&amp;(T(n,s),T(n,~s)),l.arraySet(n.pending_buf,n.window,r,s,n.pending),n.pending+=s}a._tr_init=function(t){J||(function(){var t,e,a,i,n,r=new Array(m+1);for(i=a=0;i&lt;s-1;i++)for(R[i]=a,t=0;t&lt;1&lt;&lt;y[i];t++)Z[a++]=i;for(Z[a-1]=i,i=n=0;i&lt;16;i++)for(D[i]=n,t=0;t&lt;1&lt;&lt;x[i];t++)A[n++]=i;for(n&gt;&gt;=7;i&lt;u;i++)for(D[i]=n&lt;&lt;7,t=0;t&lt;1&lt;&lt;x[i]-7;t++)A[256+n++]=i;for(e=0;e&lt;=m;e++)r[e]=0;for(t=0;t&lt;=143;)S[2*t+1]=8,t++,r[8]++;for(;t&lt;=255;)S[2*t+1]=9,t++,r[9]++;for(;t&lt;=279;)S[2*t+1]=7,t++,r[7]++;for(;t&lt;=287;)S[2*t+1]=8,t++,r[8]++;for(j(S,_+1,r),t=0;t&lt;u;t++)E[2*t+1]=5,E[2*t]=H(t,5);C=new I(S,y,f+1,_,m),N=new I(E,x,0,u,m),O=new I(new Array(0),z,0,c,b)}(),J=!0),t.l_desc=new r(t.dyn_ltree,C),t.d_desc=new r(t.dyn_dtree,N),t.bl_desc=new r(t.bl_tree,O),t.bi_buf=0,t.bi_valid=0,K(t)},a._tr_stored_block=Q,a._tr_flush_block=function(t,e,a,i){var n,r,s=0;0&lt;t.level?(2===t.strm.data_type&amp;&amp;(t.strm.data_type=function(t){var e,a=4093624447;for(e=0;e&lt;=31;e++,a&gt;&gt;&gt;=1)if(1&amp;a&amp;&amp;0!==t.dyn_ltree[2*e])return o;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return h;for(e=32;e&lt;f;e++)if(0!==t.dyn_ltree[2*e])return h;return o}(t)),G(t,t.l_desc),G(t,t.d_desc),s=function(t){var e;for(X(t,t.dyn_ltree,t.l_desc.max_code),X(t,t.dyn_dtree,t.d_desc.max_code),G(t,t.bl_desc),e=c-1;3&lt;=e&amp;&amp;0===t.bl_tree[2*B[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),n=t.opt_len+3+7&gt;&gt;&gt;3,(r=t.static_len+3+7&gt;&gt;&gt;3)&lt;=n&amp;&amp;(n=r)):n=r=a+5,a+4&lt;=n&amp;&amp;-1!==e?Q(t,e,a,i):4===t.strategy||r===n?(F(t,2+(i?1:0),3),q(t,S,E)):(F(t,4+(i?1:0),3),function(t,e,a,i){var n;for(F(t,e-257,5),F(t,a-1,5),F(t,i-4,4),n=0;n&lt;i;n++)F(t,t.bl_tree[2*B[n]+1],3);W(t,t.dyn_ltree,e-1),W(t,t.dyn_dtree,a-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),q(t,t.dyn_ltree,t.dyn_dtree)),K(t),i&amp;&amp;M(t)},a._tr_tally=function(t,e,a){return t.pending_buf[t.d_buf+2*t.last_lit]=e&gt;&gt;&gt;8&amp;255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&amp;e,t.pending_buf[t.l_buf+t.last_lit]=255&amp;a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(Z[a]+f+1)]++,t.dyn_dtree[2*U(e)]++),t.last_lit===t.lit_bufsize-1},a._tr_align=function(t){var e;F(t,2,3),L(t,w,S),16===(e=t).bi_valid?(T(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8&lt;=e.bi_valid&amp;&amp;(e.pending_buf[e.pending++]=255&amp;e.bi_buf,e.bi_buf&gt;&gt;=8,e.bi_valid-=8)}},{&quot;../utils/common&quot;:3}],15:[function(t,e,a){&quot;use strict&quot;;e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=&quot;&quot;,this.state=null,this.data_type=2,this.adler=0}},{}],&quot;/&quot;:[function(t,e,a){&quot;use strict&quot;;var i={};(0,t(&quot;./lib/utils/common&quot;).assign)(i,t(&quot;./lib/deflate&quot;),t(&quot;./lib/inflate&quot;),t(&quot;./lib/zlib/constants&quot;)),e.exports=i},{&quot;./lib/deflate&quot;:1,&quot;./lib/inflate&quot;:2,&quot;./lib/utils/common&quot;:3,&quot;./lib/zlib/constants&quot;:6}]},{},[])(&quot;/&quot;)});</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/nodeca/pako/blame/dbab16e12be930a758f8401f0d5151e83a0d392f/dist/pako.min.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/nodeca/pako/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2019 <span title="0.31759s from unicorn-545b89b488-frgxt">GitHub</span>, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" integrity="sha512-BlCvumXWTvpASEdhCGiahDUDf7Bwb8QXA2XnnSnqJ9QafxcNcrNYUNYS2wXmd3nEpO//+zlZa9DSV9zmu5MqRg==" type="application/javascript" src="https://github.githubassets.com/assets/compat-bootstrap-90c0ace0.js"></script>
    <script crossorigin="anonymous" integrity="sha512-tvpJOpHKYOu+dVKq1e7vf5Ble6rQlpDAhxbiu8KqVZpeztFNcLtD1EwUsvHkXGe6lEIn+1xHgvt/m360g1gdCw==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-a142dc33.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-Dp41z+eCLvGTwdZrlJma06Mp0QENRmr2sgN87vVpqY4qkWYIpmSj+Rr0irnWXNwu47rlyVMiPomVJuPQpBuljQ==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-4bcc1b86.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

