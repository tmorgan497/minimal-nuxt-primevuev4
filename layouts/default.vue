<!-- layouts/default.vue -->

<template>

    <div class="flex h-screen">

        <!-- Sidebar -->
        <div class="w-12 flex justify-center bg-primary-500 dark:bg-primary-800 pt-8">
            <nav>
                <Icon name="mdi:cogs" size="30px" class="text-primary-50" />
            </nav>
        </div>

        <!-- Main Content -->
        <div class="flex flex-col flex-grow">
            <Menubar>
                <template #start>
                    <a class="font-bold" href="/">Sophisticated Webapp</a>
                </template>

                <template #end>
                    <Button @click="toggleColorScheme">
                        <template #icon>
                            <Icon name="mdi:theme-light-dark" />
                        </template>
                    </Button>
                </template>
            </Menubar>
            <main class="flex-grow">
                <NuxtPage />
            </main>
        </div>

    </div>

</template>

<script setup>
import { ref } from 'vue';

const isDarkMode = ref(false);

function toggleColorScheme() {
    isDarkMode.value = !isDarkMode.value;
    console.log(isDarkMode.value);
    document.body.classList.toggle("p-dark");
}
</script>
