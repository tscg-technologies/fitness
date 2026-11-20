# FITNESS STUDIO — Complete Image Generation Guide (Google Flow)

> **CRITICAL DIRECTIVE COMPLIANCE:**
> No images have been retrieved, downloaded, or generated inside the website project.
> All positions currently utilize responsive CSS and inline SVG placeholders with zero layout shift.
> This document provides the complete prompt book and technical inventory for generating all 81 unique studio images via **Google Flow** and seamlessly integrating them into `fitness-studio/assets/images/`.

---

## 1. Executive Summary & Inventory Breakdown

- **Total Unique Images:** 81
- **Total Placeholder Instances Across 21 HTML Pages:** 84
- **Orientation Breakdown:**
  - **Landscape (16:9):** 39 Images
  - **Landscape (4:3):** 6 Images (Blog Cards)
  - **Portrait (4:5):** 28 Images (Hero, Class Cards, Disciplines)
  - **Portrait (3:4):** 8 Images (Trainer Portfolios)
  - **Square (1:1):** 0 Images
- **Destination Folder:** `fitness-studio/assets/images/`
- **Recommended File Format:** WebP or high-quality JPG (progressive, 85–90% quality)

### Color Palette Directives for Image Generation
- **Primary Studio Ambiance:** Deep charcoal and dark slate (`#111313`, `#1B2020`)
- **Key Accent Lights:** Subtle neon vibrant lime edge lighting (`#C7F36B`)
- **Secondary Tone:** Soft organic mint and neutral architectural concrete (`#A9C99C`, `#252C2A`)
- **Warm Accents:** Warm ambient beige lamps / natural cedar wood trim (`#E8DCC8`)
- **Aesthetic Benchmark:** Premium international boutique fitness club (e.g., Equinox, Barry's, 1Rebel, KX, Third Space).

---

## 2. Global Google Flow Negative Prompt
Apply the following negative prompt parameters across all prompts in Google Flow:
```text
ugly, deformed, disfigured, poor anatomy, bad hands, missing fingers, extra limbs, blurry, low resolution, cheap gym, bodybuilding contest, dirty floor, cartoon, 3d render, illustration, saturated gaudy neon, overexposed, watermark, text, logos, brand trademarks, sweaty grime, extreme bodybuilder physique, unnatural plastic skin.
```

---

## 3. Complete Image Inventory & Google Flow Prompts

### Section A: Homepage Images (`index.html`)

#### Image 01: `home-hero-fitness-studio.jpg`
- **HTML Page:** `index.html` (Hero Section)
- **Aspect Ratio:** 4:5 Portrait | **Target Resolution:** 1200 × 1500 px
- **Orientation:** Portrait | **Purpose:** Main homepage hero visual
- **Description:** Dynamic athletic woman in premium dark fitness gear performing a focused explosive kettlebell movement in a dimly lit boutique fitness studio with subtle lime backlight.
```text
Google Flow Prompt:
A cinematic editorial portrait of an athletic woman in minimalist dark grey workout apparel performing a kettlebell snatch with perfect form. Modern boutique fitness studio setting with dark charcoal acoustic walls, dark oak athletic flooring, and clean geometric architecture. Subtle rim lighting in vibrant electric lime (#C7F36B) tracing the athletic contours of her arms and shoulders. Warm ambient beige fill light from the side. Low angle dynamic shot, 50mm f/1.8 lens, shallow depth of field with the background softly blurred showing clean matte black dumbbells on a steel rack. Confident, empowered, focused expression. 8k resolution, raw photography, natural skin texture, editorial fitness magazine aesthetic. --ar 4:5
```

#### Image 02: `home-studio-interior.jpg`
- **HTML Page:** `index.html` (Intro Section)
- **Aspect Ratio:** 16:9 Landscape | **Target Resolution:** 1920 × 1080 px
- **Orientation:** Landscape | **Purpose:** Studio architecture introduction
- **Description:** Spacious luxury boutique fitness studio interior with matte black equipment, ambient lime linear ceiling LEDs, and polished concrete and rubber flooring.
```text
Google Flow Prompt:
Architectural interior photograph of a luxury boutique fitness studio space. Clean, open workout floor featuring custom matte black turf sprint lanes, organized rows of sleek kettlebells and dumbbells, and ceiling-suspended punch bags. Recessed linear LED strip lighting in vibrant lime and soft warm beige casting an energetic yet sophisticated glow across dark charcoal walls and shock-absorbing rubber flooring. Wide angle 24mm architectural lens, perfectly straight perspective, pristine, uncluttered, premium design magazine style. 8k resolution, high dynamic range. --ar 16:9
```

#### Image 03: `class-hiit-training.jpg`
- **HTML Page:** `index.html` (Class Cards - HIIT)
- **Aspect Ratio:** 4:5 Portrait | **Target Resolution:** 1080 × 1350 px
- **Orientation:** Portrait | **Purpose:** Class card showcase
- **Description:** Intense interval workout participant on a ski-erg or air bike with visible effort and determination.
```text
Google Flow Prompt:
Medium shot of an athletic man performing high-intensity interval conditioning on an indoor ski-erg in a dark boutique workout studio. Atmospheric mist in the air catching vibrant lime rim lights. Dynamic motion blur in the cords while the subject's determined expression remains sharp. Dark background with subtle equipment silhouettes. Eye-level shot, 85mm f/2.0 portrait lens, dramatic directional studio lighting, commercial athletic campaign style. --ar 4:5
```

#### Image 04: `class-strength-training.jpg`
- **HTML Page:** `index.html` (Class Cards - Strength)
- **Aspect Ratio:** 4:5 Portrait | **Target Resolution:** 1080 × 1350 px
- **Orientation:** Portrait | **Purpose:** Class card showcase
- **Description:** Focused athlete performing a heavy dumbbell Romanian deadlift with immaculate spinal posture.
```text
Google Flow Prompt:
Full-body portrait of a female athlete executing a dumbbell Romanian deadlift in a boutique strength training zone. Clean black rubber matting, matte black urethane dumbbells held with chalked hands. Side 45-degree angle capturing pristine hip hinge mechanics and neutral spine alignment. Soft overhead spotlight with subtle warm mint backlighting. Professional athletic photography, high clarity, realistic gym interior. --ar 4:5
```

#### Image 05: `class-pilates.jpg`
- **HTML Page:** `index.html` (Class Cards - Pilates)
- **Aspect Ratio:** 4:5 Portrait | **Target Resolution:** 1080 × 1350 px
- **Orientation:** Portrait | **Purpose:** Class card showcase
- **Description:** Elegant Pilates participant on a dense dark grey mat holding a controlled abdominal teaser pose.
```text
Google Flow Prompt:
Editorial fitness photograph of a woman executing a precise Pilates teaser pose on a luxury dark grey textured mat. Dedicated Pilates studio with warm wood slatted acoustic walls and minimalist ambient warm lighting. Clean posture, pointed toes, elongated arms, core engagement. Side profile camera angle at floor level, 50mm lens, tranquil yet strong atmosphere, elegant movement aesthetic. --ar 4:5
```

#### Image 06: `class-yoga-mobility.jpg`
- **HTML Page:** `index.html` (Class Cards - Yoga)
- **Aspect Ratio:** 4:5 Portrait | **Target Resolution:** 1080 × 1350 px
- **Orientation:** Portrait | **Purpose:** Class card showcase
- **Description:** Grounded athlete holding an expressive warrior posture or low lunging mobility stretch.
```text
Google Flow Prompt:
Serene photograph of a male yogi in a low crescent lunge stretch with chest lifted and arms extended skyward. Studio setting with soft textured charcoal walls and warm beige accent lights. Peaceful yet athletic mood, soft natural diffused light combined with soft mint rim light. 50mm f/2.2 lens, smooth tonal transitions, mindful wellness photography. --ar 4:5
```

#### Image 07: `class-dance-fitness.jpg`
- **HTML Page:** `index.html` (Class Cards - Dance)
- **Aspect Ratio:** 4:5 Portrait | **Target Resolution:** 1080 × 1350 px
- **Orientation:** Portrait | **Purpose:** Class card showcase
- **Description:** Joyful, dynamic dancer caught in mid-motion during a high-energy dance cardio session.
```text
Google Flow Prompt:
Action photograph of an energetic fitness dancer executing a dynamic jumping aerobic step with a joyful, authentic smile. Boutique fitness dance floor with warm ambient uplighting and subtle lime ceiling glow. Kinetic motion in hair and limbs with sharp facial focus. Frontal 3/4 angle, fast shutter speed 1/1000s, commercial lifestyle fitness look. --ar 4:5
```

#### Image 08: `class-functional-training.jpg`
- **HTML Page:** `index.html` (Class Cards - Functional)
- **Aspect Ratio:** 4:5 Portrait | **Target Resolution:** 1080 × 1350 px
- **Orientation:** Portrait | **Purpose:** Class card showcase
- **Description:** Athlete pushing a heavy black turf sled across an indoor turf track.
```text
Google Flow Prompt:
Dramatic action photo of an athlete leaning forward with intense determination while driving a black steel sled along an indoor green turf lane. Low ground-level camera angle emphasizing power and forward drive. Dark boutique gym background with industrial concrete pillars and sleek neon lime linear LED fixtures overhead. High contrast lighting, athletic campaign photography. --ar 4:5
```

#### Image 09: `home-studio-philosophy.jpg`
- **HTML Page:** `index.html` (Philosophy Section)
- **Aspect Ratio:** 4:5 Portrait | **Target Resolution:** 1080 × 1350 px
- **Orientation:** Portrait | **Purpose:** Studio philosophy lifestyle visual
- **Description:** Athlete tying training sneakers while seated on a minimalist wooden bench, radiating mindful preparation.
```text
Google Flow Prompt:
Thoughtful, candid portrait of an athletic individual tying their cross-training shoe laces on a minimalist natural oak bench in a luxury gym locker lounge. Charcoal slatted walls, soft warm recessed architectural lights, clean water bottle beside them. Contemplative and calm mood before a workout. 85mm f/1.8 lens, cinematic lighting, editorial documentary photography. --ar 4:5
```

#### Image 10: `featured-hiit-energy.jpg`
- **HTML Page:** `index.html` (Featured Panel 1)
- **Aspect Ratio:** 16:9 Landscape | **Target Resolution:** 1920 × 1080 px
- **Orientation:** Landscape | **Purpose:** Featured class panel
- **Description:** Group of diverse participants performing synchronized kettlebell swings in a dimly lit studio with lime lights.
```text
Google Flow Prompt:
Wide angle shot of a small boutique group fitness class performing kettlebell swings in unison. Dark athletic studio with dramatic backlighting in electric lime and soft mint creating heroic silhouettes. Clean rubber flooring with studio distance markings. Authentic teamwork, intense focus, commercial fitness brand aesthetic. 28mm lens, f/2.8, cinematic color grading. --ar 16:9
```

#### Image 11: `featured-strength-sculpt.jpg`
- **HTML Page:** `index.html` (Featured Panel 2)
- **Aspect Ratio:** 16:9 Landscape | **Target Resolution:** 1920 × 1080 px
- **Orientation:** Landscape | **Purpose:** Featured class panel
- **Description:** Close-up of hands gripping a knurled barbell with chalk in a boutique strength training zone.
```text
Google Flow Prompt:
Cinematic close-up of an athlete's chalk-dusted hands firmly gripping the knurled steel bar of a barbell resting on a lifting platform. Shallow depth of field focusing on the texture of the steel and hands, with the dark boutique studio and weight plates softly blurred in the background. Side spotlight highlighting muscular vascularity and dedication. 85mm macro f/2.0, dark moody aesthetic. --ar 16:9
```

#### Image 12: `featured-pilates-mobility.jpg`
- **HTML Page:** `index.html` (Featured Panel 3)
- **Aspect Ratio:** 16:9 Landscape | **Target Resolution:** 1920 × 1080 px
- **Orientation:** Landscape | **Purpose:** Featured class panel
- **Description:** Row of participants on studio mats flowing through a synchronized Pilates rollover or spinal articulation.
```text
Google Flow Prompt:
Medium wide shot of three participants on plush dark grey mats performing controlled Pilates arm reaches and spinal articulation. Warm ambient lighting bouncing off dark wood finishes and charcoal walls. Elegant lines, graceful movement, and peaceful focus. 35mm lens, gentle diffused lighting, tranquil luxury wellness feel. --ar 16:9
```

#### Image 13: `trainer-01.jpg`
- **HTML Page:** `index.html` & `trainers.html`
- **Aspect Ratio:** 3:4 Portrait | **Target Resolution:** 900 × 1200 px
- **Orientation:** Portrait | **Purpose:** Fitness Instructor 01 profile
- **Description:** Athletic male trainer in sleek branded charcoal athletic tee standing confidently with folded arms.
```text
Google Flow Prompt:
Professional studio headshot of a friendly and fit male fitness instructor in clean charcoal performance apparel. Standing with arms crossed, smiling warmly and confidently at the camera. Clean dark textured background with subtle lime edge lighting. 85mm portrait lens, f/2.8, crisp facial details, professional personal trainer directory photography. --ar 3:4
```

#### Image 14: `trainer-02.jpg`
- **HTML Page:** `index.html` & `trainers.html`
- **Aspect Ratio:** 3:4 Portrait | **Target Resolution:** 900 × 1200 px
- **Orientation:** Portrait | **Purpose:** Strength Trainer 01 profile
- **Description:** Confident female strength coach in fitted dark athletic wear holding a kettlebell against her hip.
```text
Google Flow Prompt:
Portrait of an athletic female strength trainer holding a cast-iron kettlebell resting on her hip. Warm, approachable expression, hair tied back neatly. Studio environment with subtle dark weights rack in the background. Soft directional key light, warm beige rim light, 85mm f/2.0, empowering and knowledgeable presence. --ar 3:4
```

#### Image 15: `trainer-03.jpg`
- **HTML Page:** `index.html` & `trainers.html`
- **Aspect Ratio:** 3:4 Portrait | **Target Resolution:** 900 × 1200 px
- **Orientation:** Portrait | **Purpose:** Pilates Instructor 01 profile
- **Description:** Graceful Pilates and mobility instructor with serene expression in minimalist studio wear.
```text
Google Flow Prompt:
Studio portrait of a graceful female Pilates instructor sitting cross-legged on a studio mat with upright posture and a calm, welcoming smile. Soft natural-toned lighting, warm neutral background with subtle acoustic panel texture. High-end lifestyle wellness portrait, 85mm f/2.2. --ar 3:4
```

#### Image 16: `home-group-fitness.jpg`
- **HTML Page:** `index.html` (Community Section)
- **Aspect Ratio:** 16:9 Landscape | **Target Resolution:** 1920 × 1080 px
- **Orientation:** Landscape | **Purpose:** Community group fitness visual
- **Description:** Multi-ethnic group of participants high-fiving and smiling after finishing an intense workout session together.
```text
Google Flow Prompt:
Authentic candid photograph of a small group of diverse gym members laughing and exchanging high-fives on the studio floor after a demanding class. Sweaty brows, natural genuine smiles, water bottles in hand. Dark modern studio background with warm ambient ceiling lights. 35mm documentary style, warm community feeling, candid athletic photography. --ar 16:9
```

---

### Section B: About Page Images (`about.html`)

#### Image 17: `about-studio-overview.jpg`
- **HTML Page:** `about.html` (Overview)
- **Aspect Ratio:** 4:5 Portrait | **Target Resolution:** 1080 × 1350 px
- **Orientation:** Portrait | **Purpose:** Space & architecture showcase
```text
Google Flow Prompt:
Vertical architectural view of a boutique fitness facility showing the transition between a functional turf training zone and a warm timber-clad mobility studio. Minimalist matte black storage racks, precision kettlebells, ambient recessed lime and warm beige ceiling lighting. 35mm lens, pristine architectural photography. --ar 4:5
```

#### Image 18: `about-philosophy.jpg`
- **HTML Page:** `about.html` (Philosophy)
- **Aspect Ratio:** 4:5 Portrait | **Target Resolution:** 1080 × 1350 px
- **Orientation:** Portrait | **Purpose:** Mindful training philosophy
```text
Google Flow Prompt:
An athlete standing in contemplative stillness with hands resting on their knees during a workout interval, catching their breath with calm control. Dark atmospheric studio with a soft lime beam of light cutting through subtle haze. 50mm f/1.8, poetic and powerful athletic imagery. --ar 4:5
```

#### Image 19: `about-studio-experience.jpg`
- **HTML Page:** `about.html` (Experience)
- **Aspect Ratio:** 16:9 Landscape | **Target Resolution:** 1920 × 1080 px
- **Orientation:** Landscape | **Purpose:** Luxury amenities & locker lounge
```text
Google Flow Prompt:
Interior of a luxury boutique studio locker room and hydration lounge. Matte black digital lockers, illuminated vanity mirrors with warm white LEDs, rainfall shower glass doors in the distance, rolled white towels in wire baskets. Clean, high-end hospitality aesthetic, 24mm architectural lens. --ar 16:9
```

#### Image 20: `about-fitness-community.jpg`
- **HTML Page:** `about.html` (Community)
- **Aspect Ratio:** 16:9 Landscape | **Target Resolution:** 1920 × 1080 px
- **Orientation:** Landscape | **Purpose:** Inclusive workout culture
```text
Google Flow Prompt:
A trainer demonstrating a dumbbell squat variation to an attentive group of four members standing in a circle. Supportive, encouraging coaching interaction in a modern boutique studio. Natural warm lighting, genuine smiles, 35mm lens, welcoming boutique club atmosphere. --ar 16:9
```

---

### Section C: Classes Directory Images (`classes.html`)

#### Image 21: `class-dir-hiit.jpg`
- **HTML Page:** `classes.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Male athlete performing rapid battle rope waves with dynamic ripples, low athletic stance, dark gym with lime rim lights. --ar 4:5

#### Image 22: `class-dir-strength.jpg`
- **HTML Page:** `classes.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Athlete performing a front-loaded dumbbell squat with deep hip mobility and proud chest in a boutique resistance studio. --ar 4:5

#### Image 23: `class-dir-pilates.jpg`
- **HTML Page:** `classes.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Pilates participant holding a side plank with top arm extended vertically, demonstrating core stability on a dark mat. --ar 4:5

#### Image 24: `class-dir-yoga.jpg`
- **HTML Page:** `classes.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Yogi flowing into Warrior II pose with outstretched arms and grounded feet, soft ambient mint backlighting. --ar 4:5

#### Image 25: `class-dir-dance.jpg`
- **HTML Page:** `classes.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Dance cardio participant caught mid-turn with energetic arm styling, vibrant studio atmosphere, joyful fitness energy. --ar 4:5

#### Image 26: `class-dir-functional.jpg`
- **HTML Page:** `classes.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Athlete executing a medicine ball rotational slam onto rubber turf, explosive dynamic torso turn, sharp focus. --ar 4:5

#### Image 27: `class-dir-core.jpg`
- **HTML Page:** `classes.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Focused participant holding a hollow-body rock on a studio mat, intense abdominal bracing, dramatic side rim light. --ar 4:5

#### Image 28: `class-dir-mobility.jpg`
- **HTML Page:** `classes.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Athlete practicing a 90/90 hip mobility switch on a studio floor with neutral spine and hands poised for balance. --ar 4:5

#### Image 29: `class-dir-group-conditioning.jpg`
- **HTML Page:** `classes.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Relay station with rowers and turf runners in sync during a high-energy group conditioning workout block. --ar 4:5

#### Image 30: `class-dir-personal.jpg`
- **HTML Page:** `classes.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Personal trainer offering tactile coaching cue on a client's upper back during a dumbbell row in a private suite. --ar 4:5

---

### Section D: Individual Discipline Pages

#### Image 31: `hiit-class-overview.jpg`
- **HTML Page:** `hiit.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Athlete in mid-air performing a box jump onto a black plyometric platform, explosive athleticism, dark studio, lime LEDs. --ar 4:5

#### Image 32: `strength-overview.jpg`
- **HTML Page:** `strength.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Athlete in bottom position of a clean kettlebell goblet squat, elbows tracking inside knees, flawless form. --ar 4:5

#### Image 33: `pilates-mat-session.jpg`
- **HTML Page:** `pilates.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Pilates practitioner holding a magic resistance ring between palms with active abdominal engagement and calm breath. --ar 4:5

#### Image 34: `pilates-mat-flow.jpg`
- **HTML Page:** `pilates.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Row of participants in a Pilates class performing rhythmic arm pulses during the Hundred exercise on dark mats. --ar 16:9

#### Image 35: `pilates-beginner-intro.jpg`
- **HTML Page:** `pilates.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Instructor gently demonstrating neutral pelvic positioning to a beginner participant using hands-on guidance. --ar 16:9

#### Image 36: `pilates-core-stability.jpg`
- **HTML Page:** `pilates.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Intense core stabilization drill with small green Pilates balls placed beneath the lower back for stability feedback. --ar 16:9

#### Image 37: `pilates-mobility-restore.jpg`
- **HTML Page:** `pilates.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Peaceful spinal articulation stretch with participants reaching toward their toes in seated forward flexion on mats. --ar 16:9

#### Image 38: `pilates-private-session.jpg`
- **HTML Page:** `pilates.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Private 1-on-1 Pilates coaching session in a boutique suite with personalized posture cues and direct encouragement. --ar 16:9

#### Image 39: `yoga-overview.jpg`
- **HTML Page:** `yoga.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Athletic yogi holding an inverted downward dog with elongated heels and relaxed neck in warm studio lighting. --ar 4:5

#### Image 40: `dance-overview.jpg`
- **HTML Page:** `dance-fitness.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Full-energy dance fitness instructor leading an enthusiastic group class with synchronized expressive arm gestures. --ar 4:5

#### Image 41: `functional-overview.jpg`
- **HTML Page:** `functional-training.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Athlete stepping laterally through agility ladder rungs with quick footwork on black studio turf. --ar 4:5

#### Image 42: `pt-coaching-session.jpg`
- **HTML Page:** `personal-training.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Personal trainer holding a tablet discussing workout metrics and movement goals with an engaged client in a private lounge. --ar 4:5

#### Image 43: `pt-trainer-profile-01.jpg`
- **HTML Page:** `personal-training.html` | **Aspect Ratio:** 3:4 | **Resolution:** 900 × 1200 px
- **Prompt:** Portrait of a male strength trainer holding a foam roller over his shoulder, smiling warmly, dark studio background. --ar 3:4

#### Image 44: `pt-trainer-profile-02.jpg`
- **HTML Page:** `personal-training.html` | **Aspect Ratio:** 3:4 | **Resolution:** 900 × 1200 px
- **Prompt:** Portrait of a female conditioning coach with arms crossed, sharp athletic posture, confident and welcoming expression. --ar 3:4

---

### Section E: Group Fitness & Trainers

#### Image 45: `group-class-hiit.jpg`
- **HTML Page:** `group-training.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Group of four members sprinting on indoor curve treadmills in a dark boutique HIIT studio with neon lime backlights. --ar 4:5

#### Image 46: `group-class-strength.jpg`
- **HTML Page:** `group-training.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Small group lifting synchronized dumbbells overhead during an incline bench press circuit in boutique gym. --ar 4:5

#### Image 47: `group-class-dance.jpg`
- **HTML Page:** `group-training.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Group dance workout participants in mid-jump with joyful smiling faces, colorful ambient stage lights in background. --ar 4:5

#### Image 48: `group-class-pilates.jpg`
- **HTML Page:** `group-training.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Group mat Pilates session showing disciplined alignment and synchronized breathing in a calm studio space. --ar 4:5

#### Image 49: `group-class-functional.jpg`
- **HTML Page:** `group-training.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Partner functional circuit: one athlete performing sled push while partner performs medicine ball chest passes. --ar 4:5

#### Image 50: `group-class-mobility.jpg`
- **HTML Page:** `group-training.html` | **Aspect Ratio:** 4:5 | **Resolution:** 1080 × 1350 px
- **Prompt:** Group mobility class performing seated spinal twist stretches on cushioned mats with peaceful studio mood. --ar 4:5

#### Image 51: `trainer-04.jpg`
- **HTML Page:** `trainers.html` | **Aspect Ratio:** 3:4 | **Resolution:** 900 × 1200 px
- **Prompt:** Portrait of a male yoga and mobility instructor with serene expression and hands clasped in front, dark textured wall. --ar 3:4

#### Image 52: `trainer-05.jpg`
- **HTML Page:** `trainers.html` | **Aspect Ratio:** 3:4 | **Resolution:** 900 × 1200 px
- **Prompt:** Dynamic portrait of a female dance fitness coach in stylish sports bra and joggers with an infectious energetic smile. --ar 3:4

#### Image 53: `trainer-06.jpg`
- **HTML Page:** `trainers.html` | **Aspect Ratio:** 3:4 | **Resolution:** 900 × 1200 px
- **Prompt:** Portrait of a functional fitness trainer holding an agility cone, confident stance, dark boutique gym lighting. --ar 3:4

---

### Section F: Structured Programs (`programs.html`)

#### Image 54: `program-fitness-foundation.jpg`
- **HTML Page:** `programs.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** New studio members receiving friendly technique onboarding instructions from a coach before their first class. --ar 16:9

#### Image 55: `program-strength-conditioning.jpg`
- **HTML Page:** `programs.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Heavy trap bar deadlift setup on Olympic platform, athlete testing grip before the pull, dramatic side lighting. --ar 16:9

#### Image 56: `program-movement-mobility.jpg`
- **HTML Page:** `programs.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Athlete stretching with a resistance band looped around foot in hamstring stretch, relaxed facial expression. --ar 16:9

#### Image 57: `program-active-lifestyle.jpg`
- **HTML Page:** `programs.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Healthy active individuals enjoying post-workout conversation with cold-pressed drinks in boutique studio lounge. --ar 16:9

#### Image 58: `program-core-stability.jpg`
- **HTML Page:** `programs.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Side angle of athlete performing a forearm plank on mat with glass reflection showing clean posture and spinal alignment. --ar 16:9

#### Image 59: `program-group-challenge.jpg`
- **HTML Page:** `programs.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Enthusiastic group fitness members cheering each other on during the final round of a studio consistency challenge. --ar 16:9

---

### Section G: Studio Gallery Images (`gallery.html`)

#### Image 60: `gallery-studio-interior-main.jpg`
- **HTML Page:** `gallery.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Wide architectural shot of main studio with polished concrete floors, matte black dumbbell racks, and custom lime overhead lighting. --ar 16:9

#### Image 61: `gallery-hiit-session-01.jpg`
- **HTML Page:** `gallery.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Action shot of athlete pulling row ergometer handle with explosive power, water flywheel spinning, atmospheric lighting. --ar 16:9

#### Image 62: `gallery-strength-zone-01.jpg`
- **HTML Page:** `gallery.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Aesthetic rows of precision urethane dumbbells arranged in weight order on dual-tier industrial steel rack. --ar 16:9

#### Image 63: `gallery-pilates-studio-01.jpg`
- **HTML Page:** `gallery.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Peaceful dedicated Pilates room with neat rows of dark mats, wooden dowels, and organic slatted timber wall panels. --ar 16:9

#### Image 64: `gallery-yoga-space-01.jpg`
- **HTML Page:** `gallery.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Minimalist yoga studio sanctuary with soft cove lighting, cork yoga blocks, and rolled mats on dark hardwood floors. --ar 16:9

#### Image 65: `gallery-dance-floor-01.jpg`
- **HTML Page:** `gallery.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Spacious studio sprung dance floor with wall-to-wall mirrors reflecting neon lime and violet accent light beams. --ar 16:9

#### Image 66: `gallery-group-class-01.jpg`
- **HTML Page:** `gallery.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Panoramic shot of full class executing simultaneous kettlebell deadlifts with instructor giving guidance from the center. --ar 16:9

#### Image 67: `gallery-trainer-coaching-01.jpg`
- **HTML Page:** `gallery.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Close-up of trainer encouraging a participant completing their final sled push with positive eye contact and fist bump. --ar 16:9

#### Image 68: `gallery-studio-lounge-01.jpg`
- **HTML Page:** `gallery.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Boutique studio reception and espresso lounge with fluted oak counter, minimalist menu board, and leather bench seating. --ar 16:9

---

### Section H: Workshops & Events (`events.html`)

#### Image 69: `event-beginner-orientation.jpg`
- **HTML Page:** `events.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Friendly instructor holding an orientation workshop for beginners explaining heart rate zones on a whiteboard. --ar 16:9

#### Image 70: `event-strength-workshop.jpg`
- **HTML Page:** `events.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Masterclass workshop analyzing barbell bar path with laser angle markers in an educational studio seminar. --ar 16:9

#### Image 71: `event-pilates-workshop.jpg`
- **HTML Page:** `events.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Pilates alignment clinic where coach demonstrates spinal articulation models to attentive seated attendees. --ar 16:9

#### Image 72: `event-mobility-session.jpg`
- **HTML Page:** `events.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Recovery clinic with participants using massage guns and mobility bands under coach instruction in dim warm lighting. --ar 16:9

#### Image 73: `event-group-fitness.jpg`
- **HTML Page:** `events.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Evening community social fitness event with celebratory music, enthusiastic team circuits, and vibrant boutique ambiance. --ar 16:9

#### Image 74: `event-fitness-challenge.jpg`
- **HTML Page:** `events.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Studio challenge board with member milestone pins and motivational quotes written in minimalist typography on dark slate. --ar 16:9

---

### Section I: Fitness Journal Articles (`blog.html`)

#### Image 75: `blog-strength-fundamentals.jpg`
- **HTML Page:** `blog.html` | **Aspect Ratio:** 4:3 | **Resolution:** 1200 × 900 px
- **Prompt:** Close-up of barbell weights resting on black platform with chalk dust and stopwatch in foreground, moody lighting. --ar 4:3

#### Image 76: `blog-hiit-pacing.jpg`
- **HTML Page:** `blog.html` | **Aspect Ratio:** 4:3 | **Resolution:** 1200 × 900 px
- **Prompt:** Athlete monitoring heart rate on a smart sports watch while resting between high-intensity running intervals. --ar 4:3

#### Image 77: `blog-pilates-posture.jpg`
- **HTML Page:** `blog.html` | **Aspect Ratio:** 4:3 | **Resolution:** 1200 × 900 px
- **Prompt:** Side view of seated person demonstrating ideal spinal ergonomics and shoulder alignment on a studio bench. --ar 4:3

#### Image 78: `blog-recovery-sleep.jpg`
- **HTML Page:** `blog.html` | **Aspect Ratio:** 4:3 | **Resolution:** 1200 × 900 px
- **Prompt:** Minimalist calm bedroom with linen sheets, dim bedside lamp, and a book on rest and recovery physiology. --ar 4:3

#### Image 79: `blog-beginner-guide.jpg`
- **HTML Page:** `blog.html` | **Aspect Ratio:** 4:3 | **Resolution:** 1200 × 900 px
- **Prompt:** Flatlay of clean minimalist gym essentials: black sneakers, water canteen, sweat towel, and class schedule card on dark timber. --ar 4:3

#### Image 80: `blog-nutrition-education.jpg`
- **HTML Page:** `blog.html` | **Aspect Ratio:** 4:3 | **Resolution:** 1200 × 900 px
- **Prompt:** Glass carafe of infused mineral water with lime slices and fresh mint leaves on a dark slate tabletop, crisp and refreshing. --ar 4:3

---

### Section J: Contact Location (`contact.html`)

#### Image 81: `contact-map-location.jpg`
- **HTML Page:** `contact.html` | **Aspect Ratio:** 16:9 | **Resolution:** 1920 × 1080 px
- **Prompt:** Sleek dark-mode stylized architectural map graphic showing studio street corner, minimalist vector road lines with glowing lime pin. --ar 16:9

---

## 4. Image Replacement Instructions

Once all 81 images are generated with Google Flow:
1. Export images matching the exact filenames listed above into:
   `fitness-studio/assets/images/`
2. Open the HTML pages and swap each placeholder block:
   ```html
   <!-- Replace This Placeholder Block: -->
   <div class="media-placeholder ratio-4-5">
     ...
     <code class="ph-filename">home-hero-fitness-studio.jpg</code>
     ...
   </div>

   <!-- With This Production Image Tag: -->
   <img src="assets/images/home-hero-fitness-studio.jpg" alt="Athletic training session at FITNESS STUDIO" class="ratio-4-5" style="width: 100%; object-fit: cover; border-radius: var(--radius-md);" loading="lazy">
   ```
3. All image dimensions are locked by standard CSS classes (`.ratio-16-9`, `.ratio-4-5`, `.ratio-3-4`, `.ratio-4-3`) to guarantee 0.00 Cumulative Layout Shift (CLS).
