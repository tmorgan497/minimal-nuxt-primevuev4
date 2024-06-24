// themes/maintheme.js

import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{emerald.50}',
            100: '{emerald.100}',
            200: '{emerald.200}',
            300: '{emerald.300}',
            400: '{emerald.400}',
            500: '{emerald.500}',
            600: '{emerald.600}',
            700: '{emerald.700}',
            800: '{emerald.800}',
            900: '{emerald.900}',
            950: '{emerald.950}'
        }
    },
    components: {
        menubar: {
            root: {
                background: '{surface.500}',
                color: '{surface.50}',
                border: {
                    color: '{surface.500}',
                    radius: '0'
                }
            }
        },
        button: {
            root: {
                borderRadius: '6px',
                padding: {
                    x: '.25rem',
                    y: '.125rem'
                },
            },
            colorScheme: {
                light: {
                    primary: {
                        background: '{primary.500}',
                        color: '{primary.50}',
                        border: {
                            color: '{primary.600}'
                        }
                    },
                },
                dark: {
                    primary: {
                        background: '{primary.800}',
                        color: '{primary.100}',
                        border: {
                            color: '{primary.900}'
                        }
                    }
                }
            }
        }
    }
});

export default {
    preset: MyPreset,
    options: {
        darkModeSelector: '.p-dark',
    }
};
