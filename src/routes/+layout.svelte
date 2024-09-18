<!-- src/routes/$layout.svelte -->
<script>
    import '../app.css';
    //components
    import { ModeWatcher } from "mode-watcher";
    import { page } from '$app/stores';
    import { toggleMode } from "mode-watcher";
    import Button from "$lib/components/ui/button/button.svelte";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu"

    //icons
    import Sun from "lucide-svelte/icons/sun";
    import Moon from "lucide-svelte/icons/moon";
    import CircleUser from "lucide-svelte/icons/circle-user";
    import House from "lucide-svelte/icons/house"
    
    const authRoutes = ['/auth/login', '/auth/signup'];
    let shouldHideNavbarSide;
    $: shouldHideNavbarSide = authRoutes.includes($page.url.pathname);
    const isAuth = true;

</script>

<main>
    <ModeWatcher/>
    {#if !shouldHideNavbarSide}


        <!--NAVBAR-->
        <header class="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur ">
            
            <nav class="container flex h-14 w-full items-center justify-between">
                {#if !isAuth}

                    <div class="mr-4 flex">
                        <a href="/" class="mr-6 flex items-center space-x-2" > LOGO </a>
                    
                    </div>

                    <div class="flex gap-4">
                        <Button>
                            <a href="/auth/login">Login</a>
                        </Button>
                        <Button on:click={toggleMode} variant="ghost" size="icon">  
                            <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                            <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                        </Button>
                    </div>
                        

                {:else}

                    <div class="mr-4 flex">
                        <a href="/" class="mr-6 flex items-center space-x-2" > LOGO </a>
                        <div class="flex items-center gap-6 text-sm">
                            <a href="/" class="hover:text-foreground/80 transition-colors text-foreground/60 capitalize">Test</a>
                            <a href="/" class="hover:text-foreground/80 transition-colors text-foreground/60 capitalize">Test</a>
                        </div>
                    
                    </div>
                    
                    <div>
                            
                        <Button on:click={toggleMode} variant="ghost" size="icon">  
                            <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                            <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                        </Button>
                        
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button  variant="ghost" size="icon">
                                    <CircleUser  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"/>
                                                    
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                            <DropdownMenu.Group>
                                <DropdownMenu.Label>My Account</DropdownMenu.Label>
                                <DropdownMenu.Separator />
                                <DropdownMenu.Item>Profile</DropdownMenu.Item>
                                <DropdownMenu.Item>Logout</DropdownMenu.Item>
                            </DropdownMenu.Group>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root> 

                        
                    </div>
                {/if}
            </nav>
         
        </header>

        <!--Sidebar-->
        <div class="w-full grid grid-cols-5 my-2 p-2 gap-2">
            <!--LEFT SIDE BAR-->
            <div class=" h-[85vh] col-span-1 border flex flex-col items-center justify-between px-8 py-2 rounded-md sticky top-16 left-0 right-0">
            
                    <a href="/">
                        <span class="flex w-full gap-4"><House></House> <span class="text-md font-semibold">Home</span></span>
                    </a>
                    <div class="visible py-md grow flex flex-col justify-end">
                        <a  target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Djsiarez777" class="no-underline text-[0.60rem] font-semibold ">Dave Siarez © 2024. All rights reserved.</a>
                    </div>
            </div>
            <!--CONTENT-->
            <div class="  col-span-3">
                <slot />
            </div>
            <!--RIGHT SIDE BAR-->
            <div class=" h-[60vh] border col-span-1 rounded-md sticky top-16">
                
            </div>

        </div>

        


    {:else}
        <div class="container flex w-full items-center justify-between h-14">
            
            <a href="/" class="mr-6 flex items-center space-x-2" > LOGO </a>

        
            <Button on:click={toggleMode} variant="ghost" size="icon">  
                <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
            </Button>
        </div>
    
        <slot/>
    {/if}
</main>


    