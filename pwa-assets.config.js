import {
    defineConfig,
    minimal2023Preset as preset,
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
    headLinkOptions: {
        preset: '2023',
    },
    preset,
    images: [['src/assets/mahmoud-el-gyuoshi-high-resolution-icon.png'] , ["src/assets/Ingin-Menjadi-Full-Stack-Developer-Handal-Yuk-Simak-Tipsnya-removebg-preview (1).png"]],

})
