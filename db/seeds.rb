require 'open-uri'

User.destroy_all
Product.destroy_all

demo = User.create!(email: 'demo@user.com', password: 'testing')

products = Product.create!([
    {
        'name': 'BLITZTRANCE LIPSTICK',
        'description': 'Strut, sashay and shimmy from daytime to discothèque in a full-coverage, couture-creme lipstick infused with provocative pigments and ultra-reflective pearls. This electrifyingly elegant lipstick delivers a haute yet hi-fi glow suspended in the tantalizing texture of an emollient-infused formula. Lavish your lips in très sophistiquée shade of timeless-classic red. Preen and pout with star-struck pigments that glide on flawlessly, releasing a beaming blast of one-stroke, hypnotic colour. Tempt as you transform lips into a multifaceted masterpieces destined to shimmer all-night strong.',
        'price': 38,
        'colour': 'REBEL RED STARGLAZE'
    },
    {
        'name': 'MATTETRANCE LIPSTICK',
        'description': 'A revolutionary lipstick so luxurious and richly pigmented, it drenches lips in a lightweight veil of opaque colour while delivering a mesmerizingly modern matte finish. Sensually creamy and brilliant in texture, this collection evokes the femme fatale siren with every application. Colour and finish so sinful, your pout will speak volumes without ever whispering a word.',
        'price': 38,
        'colour': 'Deep Void'
    },
    {
        'name': 'LIQUILUST: LEGENDARY WEAR MATTE LIPSTICK',
        'description': 'Unleash a fantasy of colour without compromise. This rule-breaking, comfort-matte Lipstick drenches lips in an ultra-velvety veil of intensely saturated colour that wears for up to 12 hours without smudging or transferring. Its luscious whipped texture glides on seamlessly, offers ample playtime and sets to a lightweight, smooth finish enhanced by a proprietary stretch-effect. A tapered teardrop applicator lets you line, fill and blend your pout to unparalleled perfection in long-wearing looks ranging from defined opacity to diffused ombre. The plush, versatile formula elevates your artistry with effortless blendability for endless customisation.',
        'price': 30,
        'colour': 'Spellbound'
    },
    {
        'name': 'PERMAGEL ULTRA LIP PENCIL',
        'description': 'A bold waterproof lip pencil in a highly coveted and inventive tone. Designed to simultaneously blend lip colour while adding sharp definition and structure for long-lasting lip perfection.',
        'price': 28,
        'colour': 'Suburbia'
    },
    {
        'name': 'LUST: GLOSS',
        'description': 'Ethereally erotic colour meets surreally seductive shine in LUST: Gloss. This orally fixating balm glides on, flawlessly soothing and smoothing your lips while evoking three-dimensional lustre. Turn your lips on in a ravishingly resplendent hue of one never-sticky, sinfully scintillating shade. But beware: Mother’s conjured the ultimate in luxe lip paraphernalia, bound to elicit softcore seduction as unforgettable as the searing memories, passion and pleasure of first love.',
        'price': 28,
        'colour': 'Aliengelic'
    },
    {
        'name': 'OPULUST: GLOSS',
        'description': 'Seductively electrifying shades meet holo-glamorous high shine in Mother’s newest gloss evolution, OpuLUST. This lavishly luxurious gloss seamlessly glides onto the lips, delivering multidimensional sparkle with a smooth, non-sticky finish. Plush and cushiony, this formula’s innovative Emollient Matrix Technology ensures a lightweight feel, producing a shimmering, move-resistant glasslike finish with otherworldly opacity. Combining the thrills of opulent lustre with pulse-pounding passion, OpuLUST invokes the endless pleasure of iconic indulgence.',
        'price': 30,
        'colour': 'Lavendaring'
    },
    {
        'name': 'LIP FETISH BALM',
        'description': 'Behold the first-ever captivating covert key to a killer kiss, perfected backstage over the course of three decades to repair, restore and replenish the lips, keeping them sensuously smooth and kissably soft. This alluringly opalescent formula is the original multi-tasker: a divine daily balm, a provocative primer and a luxe leave-on lip treatment. Presented in the iconoclassic silhouette, rendered in pure white kissed by golden lips.',
        'price': 30,
        'colour': 'Clear'
    },
    {
        'name': 'MOTHERSHIP I: SUBLIMINAL PALETTE',
        'description': 'A captivating collection of 10 cult-classic shades in brilliant blues and violets, mesmerizing jewel tones, lustrous golds and signature matte neutrals that offer pure vibrant colour saturation and diamond sparkle intensity, all married in one iconic palette.',
        'price': 125
    },
    {
        'name': 'MOTHERSHIP II: SUBLIME PALETTE',
        'description': 'A celestial collection of 10 cult-classic shades in fiery coppers, poetic pinks, mesmerizing jewel tones, brilliant bronze and signature matte neutrals that offer pure vibrant colour saturation and diamond sparkle intensity, all married in one iconic palette.',
        'price': 125
    },
    {
        'name': 'MOTHERSHIP III: SUBVERSIVE PALETTE',
        'description': 'A provocative collection of 10 cult-classic shades in vivid violets, mutational blues, sumptuous greens and signature matte neutrals that offer pure vibrant colour saturation and diamond sparkle intensity, all married in one iconic palette.',
        'price': 125
    },
    {
        'name': 'MOTHERSHIP VIII: DIVINE ROSE II',
        'description': 'Luxuriate in an avant garden of couture colour with Mothership VIII: Divine Rose II. This provocative Eye Palette transforms the blushing beauties of the instantly iconic Mothership VII: Divine Rose into a glittering grandiflora bouquet of 10 brilliantly blendable pigments that elevate eye artistry to the heavens in sublime shades, ranging from petal-soft pink, peach, rosé and burgundy to gilty golds, brazen bronze and astral champagne.',
        'price': 125,
        'colour': 'Rose Chrome'
    },
    {
        'name': 'CELESTIAL DIVINITY LUXE QUAD',
        'description': 'This galactic glamorous quad brings deep-space drama to the eyes in stellar shades of electric turquoise, golden champagne, deep shimmering burgundy and rich golden rose. Each creamy, blendable formulation delivers high-impact colour, igniting a vivid vortex of opulence. Elevate your artistry to stratospheric levels with glittering, powerful pigments that beam throughout the universe.',
        'price': 58,
        'colour': 'INTERSTELLAR ICON'
    },
    {
        'name': 'EYEDOLS EYE SHADOW',
        'description': 'In the beginning, there was the Mothership, where shadows invoking the ritual rebellion, iconic illumination and obsessive opulence of Divine Makeup Artistry first came to light. Now behold the rapturous debut of her couture colour creations in singular form — a divine array of sinfully smooth pigments, tempting textures and sublimely saturated to transcend the spectrum. Tease and tempt in tantalising textures: cross-polymorphic mattes that deliver an ultra-soft focus effect, gel-powder metallics that exude velvety-smooth iridescence, and high-impact pearlescent shimmers that lavish eyes in lustrous multidimensional colour. Ascend to the heavens, become an EYEdol deserving of worship.',
        'price': 25,
        'colour': 'Corrupt Copper'
    },
    {
        'name': 'PERMAGEL ULTRA GLIDE EYE PENCIL',
        'description': 'Explore a curated collection of waterproof eye pencils in a spectrum of visionary shades. Discover the infinite ways to line eyes and create signature looks with pearlescent and matte finishes. From thin, precise lines to graphic, dramatic strokes, the looks are limitless.',
        'price': 28,
        'colour': 'BLK Coffee'
    },
    {
        'name': 'PERMAGEL PRECISION LIQUID EYELINER',
        'description': 'Achieve the ultimate eye lift as you line and define with the inky black luxury of Perma Precision Liquid Eyeliner. This sensuously saturated formulation glides across the lid in obsidian velvet, with a soft, Flexi-Art tip that offers control for elegant contours and pristine definition. Draw the line at a look that is ultra fine, or lay it on thick for defiant drama. The slick, waterproof formula dries in an instant, lasting up to 24 hours for glamour that stays the night and looks just as haute the next day.',
        'price': 32
    },
    {
        'name': 'DARK STAR MASCARA',
        'description': 'This instantly volumising formulation delivers intergalactic glamour, antigravity lift and luxurious length with maximum impact and control. Pitch-black micro-fine crème pigments teleport eyes, layering each lash with lavish volume and exaggerated extraterrestrial effects. Lashes are immediately fuller, stretched and more defined, reaching beyond the stratosphere with ethereal structure and shape. The contoured brush silhouette features dense, strategically placed fibers in varying lengths that grab every lash, elevating all with otherworldly allure. Lashes are pushed-up, sculpted and loaded with texture from the root outward for intense inky volume with every coat.',
        'price': 30,
        'colour': 'Xtreme Black'
    },
    {
        'name': 'SKIN FETISH: DIVINE BLUSH',
        'description': 'Layerable. Luxurious. Legendary. Blush like an icon. Gat’s most requested launch ever, the instantly indispensable Divine Blush, creates a featherlight, long-wearing rush of couture colour in demi-matte and satin finishes. Ultra-fine powder pigments deliver sensuously soft, brilliantly blendable application. All nine shades build effortlessly from sheer to subversive, bare to bold to beyond, ensuring a wondrous wash of customisable colour tailored to every skin tone and type. Embossed with radiant roses and sublime sun rays, this new classic is the answer to the eternal question: Who Makes You Blush?',
        'price': 38,
        'colour': 'Electric Bloom'
    },
    {
        'name': 'SKIN FETISH: DIVINE GLOW HIGHLIGHTER',
        'description': 'Turn your complexion on with dazzling divinity. This high-polish pressed gold Highlighter combines skin-loving botanical oils with multi-toned micro-pearls. Molten luminosity blends seamlessly into skin for a smooth, with an ultra-reflective finish and imperceptible, silken feel. The luxe satiny powder instantly imbues everything it touches — ranging from cheekbones to décolletage — with gilded, glass-like lustre and solar-flare shine.',
        'price': 48
    },
    {
        'name': 'SKIN FETISH: ULTRA GLOW HIGHLIGHTER',
        'description': 'Transcend the spectrum with a provocatively prismatic highlighter that imparts dewy divinity and flawlessly fluid metallic radiance in a single stroke. This futuristic gel-meets-powder highlighter unites the smooth glow of a liquid with the effortlessness of high-purity crystalline pigments, delivering an iconic “wet” effect that beams beyond aliengelic gleam.',
        'price': 48
    },
    {
        'name': 'SKIN FETISH: SUBLIME SKIN HIGHLIGHTER',
        'description': 'Succumb to a gilty pleasure with this new high-performance highlighter formulation. Golden champagne-hued luminosity pairs with skin tone-refining pearl to instantly illuminate with a lightweight silk powder veil that gilds the high points of the face - or the entirety of the body - in shimmering beauty bullion. Debossed with signature GAT McPRATH LABS Hallmarks, this Limited Edition golden compact is a timeless treasure. Glow forth and prosper.',
        'price': 65
    },
    {
        'name': 'SKIN FETISH: SUBLIME PERFECTION PRIMER',
        'description': 'Makeup meets skincare in the ultimate smoothing, skin-refining Primer. The first step in Mother’s iconic SUBLIME PERFECTION SYSTEM primes, smoothes, hydrates and renews with a sublime silken effect that instantly turns back time on your complexion by preventing transepidermal moisture loss.',
        'price': 45
    },
    {
        'name': 'SKIN FETISH: SUBLIME PERFECTION FOUNDATION',
        'description': 'Mother’s instantly iconic foundation builds weightlessly from a sheer veil to flawless medium coverage in 36 universal colour choices and five shade levels custom-curated for all skin types, tones and undertones. The second step in Mother’s SUBLIME PERFECTION SYSTEM delivers a customisable couture finish that brings the runway to real life in a few powerful drops. Silky and luxurious, it feels creamy to the touch and delivers controlled, easily buildable coverage. Self-setting, post-perfecting and longwearing, its sublime satin finish lasts all day.',
        'price': 68,
        'colour': 'Medium 20'
    },
    {
        'name': 'SKIN FETISH: SUBLIME PERFECTION CONCEALER',
        'description': 'Mother’s first-ever Concealer makes every flawless face fantasy come true, delivering creamy, full coverage and a natural, radiant matte finish in 36 universal colour choices that seamlessly complement her SKIN FETISH: SUBLIME PERFECTION FOUNDATION. Longwearing, weightless and endlessly accommodating to the face’s most exquisite contours and extreme expressions, it provides sensuously smooth coverage that becomes one with the skin, mimicking its natural stretch and elasticity sans creasing or caking, No Filter Required.',
        'price': 32,
        'colour': 'Light Medium 10'
    },
    {
        'name': 'SKIN FETISH: SUBLIME PERFECTION BLURRING UNDER-EYE POWDER',
        'description': 'Perfect your under-eye with flawless, even illumination. Created for use on its own or paired with Skin Fetish: Sublime Perfection Concealer, this weightless Powder provides the ultimate finishing touch to any eye look. Its delicate, silky texture sweeps on effortlessly to blur fine lines and imperfections. Light-reflecting properties deliver a luminous, lifted effect with an incandescent soft-focus finish. ‘LIGHT’, ‘MEDIUM’ and ‘DEEP’ shades are expertly balanced to match and enhance your unique skin tone. ‘YELLOW’ Powder is a versatile formulation that can be used alone or with your regular shade as a targeted way to brighten and spot-neutralise redness. Upon application, eyes look awakened, bright and perfectly primed for colour artistry.',
        'price': 30,
        'colour': 'Yellow'
    },
    {
        'name': 'SKIN FETISH: SUBLIME PERFECTION SETTING POWDER',
        'description': 'The third step in Mother’s iconic SUBLIME PERFECTION SYSTEM, this luxurious, silky soft and super-blendable powder is the ultimate finishing touch to set makeup for flawless lasting wear. Weightless and brilliantly buildable, it takes your look from divine to sublime. Formulated to complement Sublime Perfection Foundation, it’s available in five shades that are uniquely calibrated to correspond to the Foundation’s 36 colour-true hues.',
        'price': 38,
        'colour': 'Deep 5'
    }
])

photos_list = [
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/blitztrance-lipstick-red.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/mattetrance_lipstick.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/liquilust-spellbound.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/permagel-lip-pencil-suburbia2.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/lust-gloss-aliengelic.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/opulust-gloss-lavendaring.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/lip-fetish-balm-clear.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/subliminal-palette.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/sublime-palette.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/subversive-palette.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/divine-rose-ii.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/celestial-quad-intersteller.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/eyedols-copper.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/permagel-eye-pencil-blk-coffee.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/perma-liquid-eyeliner.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/dark-star-mascara.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/divine-blush-electric.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/divine-highlighter.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/ultra-glow-highlighter.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/sublime-highlighter.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/sublime-primer.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/foundation-med.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/concealer-light.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/under-eye-powder-yellow.jpeg",
    "https://gat-mcprath-dev.s3-us-west-1.amazonaws.com/setting-powder-deep.jpeg"
]

Product.all.each_with_index do |product, i|
    product.photo.attach(io: open(photos_list[i]), filename: photos_list[i].split("/").last)
end