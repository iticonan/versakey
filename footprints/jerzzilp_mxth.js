module.exports = {
    params: {
        designator: 'S',    // change it accordingly
        P1: { type: 'net', value: undefined }, // undefined, // change to undefined as needed
        P2: { type: 'net', value: undefined }, // undefined, // change to undefined as needed
    },
    body: p => {
        const standard_opening = `(
        footprint "jerzzilp_mxth"
        (layer "F.Cu")
        (attr through_hole)
        (group "" (uuid "1b0564bb-7cee-49fa-b9cb-14bdba4dc74b") (members "2472548c-491a-4e87-8d84-c02181e52ed3" "3f559854-5c7a-4bf5-9de3-b0b5e29d5cd1" "ba70acb7-f36d-4a35-b84f-2c94c0159c01" "d3cd46f1-9c3f-4726-a5f5-1ba151232aae" "d8fd249b-2362-446b-babc-0b9d3eb523df" "eafa9dfa-498b-4670-8741-8a7e5fe32c6a" "fb51a22d-de8a-4a75-9a1f-2b34229da14e"))
        (group "" (uuid "cd9e08ab-d826-4cc7-afea-805eb14a7c3e") (members "2472ecb5-89cf-41e7-a289-7ae9b0a734b2" "2c760ac9-dbca-4d43-b364-22081012f592" "a9bc20b3-5d60-4b81-9a0a-bb3e5fcc3ed2" "b9a04ac3-8606-4bd8-99cd-b50ba3d491b8" "c82026df-2516-4b5e-a63a-1c9ca927e7e7" "dd997784-b8b6-4aba-a933-3c3e36616b72" "fe383076-163e-4d85-9c87-2f7d48bd59e3"))
        ${p.at /* parametric position */}
    `
        const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -8.255 ${0 + p.rot}) (layer "F.SilkS") (uuid "9a9ff238-a470-4c80-8f73-554a761f09f7") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -7 -7) (end -6 -7) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "03d3471a-190f-446a-86ec-7ebfcc8d21b3"))
        (fp_line (start -7 -6) (end -7 -7) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "41e87326-56df-4e76-b3c5-2ce613dbe50a"))
        (fp_line (start -7 7) (end -7 6) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "8cf9480e-d936-43bc-8b08-fb1878771949"))
        (fp_line (start -6 7) (end -7 7) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "7c9ac63a-dafc-4bdc-abce-b74de44460b7"))
        (fp_line (start 6 -7) (end 7 -7) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "996e541f-9958-4b66-b322-bda816d5d6ca"))
        (fp_line (start 7 -7) (end 7 -6) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "c617ce90-5976-42d5-91f6-bbff9963a9f8"))
        (fp_line (start 7 6) (end 7 7) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "595d81c6-5d51-4389-9d31-8357b6c5fffa"))
        (fp_line (start 7 7) (end 6 7) (stroke (width 0.15) (type solid)) (layer "F.SilkS") (uuid "2aa4d639-6896-463f-b159-7cde78b24638"))
    `
        const front_pads = `
    `
        const front_fabrication = `
        (property "Value" "jerzzilp_mxth" (at 0 8.255 ${0 + p.rot}) (layer "F.Fab") (uuid "0ffdeca6-5f57-4c25-b069-c6be38a7872d") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "7de421b2-1f29-4029-849b-8ac4f3ffcd18") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "a1625647-ff4c-458a-9d76-2011b627149c") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "4eafddb1-f1c7-4b68-8e6b-8767cbc1d5c0") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -7.5 -7.5) (end 7.5 -7.5) (stroke (width 0.15) (type solid)) (layer "F.Fab") (uuid "502cae95-c0d9-49fc-b8cf-0d1218a64bae"))
        (fp_line (start -7.5 7.5) (end -7.5 -7.5) (stroke (width 0.15) (type solid)) (layer "F.Fab") (uuid "a4435356-8e35-4c49-ac5f-1e38a07569b8"))
        (fp_line (start 7.5 -7.5) (end 7.5 7.5) (stroke (width 0.15) (type solid)) (layer "F.Fab") (uuid "a1ea7c99-791a-4ed1-9f49-1e9150ea5931"))
        (fp_line (start 7.5 7.5) (end -7.5 7.5) (stroke (width 0.15) (type solid)) (layer "F.Fab") (uuid "10b1ad3b-9e93-4526-9945-771e0c190447"))
        (fp_text user "\${REFERENCE}" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (uuid "08859d88-2b03-43f3-b913-8e1581093830") (effects (font (size 1 1) (thickness 0.15))))
    `
        const front_mask = `
    `
        const front_courtyard = `
    `
        const front_paste = `
    `
        const pads = `
        (pad "" np_thru_hole circle (at -5.08 0 ${180 + p.rot}) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Cu" "*.Mask") (uuid "2c760ac9-dbca-4d43-b364-22081012f592"))
        (pad "" np_thru_hole circle (at 0 0 ${180 + p.rot}) (size 3.9878 3.9878) (drill 3.9878) (layers "*.Cu" "*.Mask") (uuid "fe383076-163e-4d85-9c87-2f7d48bd59e3"))
        (pad "" np_thru_hole circle (at 5.08 0 ${180 + p.rot}) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Cu" "*.Mask") (uuid "dd997784-b8b6-4aba-a933-3c3e36616b72"))
        (pad "1" thru_hole circle (at -3.81 2.54 ${180 + p.rot}) (size 2 2) (drill 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "b9a04ac3-8606-4bd8-99cd-b50ba3d491b8") ${p.P1})
        (pad "1" thru_hole circle (at 0 -7.1 ${p.rot}) (size 2 2) (drill 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "eafa9dfa-498b-4670-8741-8a7e5fe32c6a") ${p.P1})
        (pad "1" thru_hole circle (at 3.81 2.54 ${180 + p.rot}) (size 2 2) (drill 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "2472ecb5-89cf-41e7-a289-7ae9b0a734b2") ${p.P1})
        (pad "2" thru_hole circle (at -4.13 -4.35 ${221.9 + p.rot}) (size 2 2) (drill 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "2472548c-491a-4e87-8d84-c02181e52ed3") ${p.P2})
        (pad "2" thru_hole circle (at -2.54 5.08 ${180 + p.rot}) (size 2 2) (drill 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "a9bc20b3-5d60-4b81-9a0a-bb3e5fcc3ed2") ${p.P2})
        (pad "2" thru_hole circle (at 2.54 5.08 ${180 + p.rot}) (size 2 2) (drill 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "c82026df-2516-4b5e-a63a-1c9ca927e7e7") ${p.P2})
        (pad "2" thru_hole circle (at 4.13 -4.35 ${221.9 + p.rot}) (size 2 2) (drill 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "d8fd249b-2362-446b-babc-0b9d3eb523df") ${p.P2})
    `
        const back_silkscreen = `
        (fp_line (start -7 -7) (end -6 -7) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "c07cfb8e-b7d6-4399-99c0-a1abeeaf7d9f"))
        (fp_line (start -7 -6) (end -7 -7) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "a4476a3e-0a52-4aa9-8d60-2a1e309128e9"))
        (fp_line (start -7 7) (end -7 6) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "b2ea05d6-9750-4518-8bbf-6e4b3df4c820"))
        (fp_line (start -6 7) (end -7 7) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "be395e71-25fc-4a47-acb3-60f81936d7d2"))
        (fp_line (start 6 -7) (end 7 -7) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "71423a72-9505-4680-9704-f88f93c13dd1"))
        (fp_line (start 7 -7) (end 7 -6) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "ec9731d9-f728-476d-be54-807c1273addb"))
        (fp_line (start 7 6) (end 7 7) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "672f4558-a872-4fe1-83ec-9613a9f02b62"))
        (fp_line (start 7 7) (end 6 7) (stroke (width 0.15) (type solid)) (layer "B.SilkS") (uuid "f6e0496a-414c-46e5-a5e7-929c4846ed48"))
        (fp_text user "\${REFERENCE}" (at 0 -8.255 ${0 + p.rot}) (layer "B.SilkS") (uuid "4fd43552-f081-465c-8a45-323bfa44a09c") (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
    `
        const back_pads = `
        (pad "" np_thru_hole circle (at -5 -1.05 ${221.9 + p.rot}) (size 1.55 1.55) (drill 1.7) (layers "F&B.Cu" "*.Mask") (uuid "fb51a22d-de8a-4a75-9a1f-2b34229da14e"))
        (pad "" np_thru_hole circle (at 0 -4.8 ${p.rot}) (size 2.3 2.3) (drill 2.3) (layers "F&B.Cu" "*.Mask") (uuid "ba70acb7-f36d-4a35-b84f-2c94c0159c01"))
        (pad "" np_thru_hole circle (at 0 -1.05 ${p.rot}) (size 6.12 6.12) (drill 6.12) (layers "F&B.Cu" "*.Mask") (uuid "3f559854-5c7a-4bf5-9de3-b0b5e29d5cd1"))
        (pad "" np_thru_hole circle (at 5 -1.05 ${221.9 + p.rot}) (size 1.55 1.55) (drill 1.7) (layers "F&B.Cu" "*.Mask") (uuid "d3cd46f1-9c3f-4726-a5f5-1ba151232aae"))
    `
        const back_fabrication = `
        (fp_line (start -7.5 -7.5) (end 7.5 -7.5) (stroke (width 0.15) (type solid)) (layer "B.Fab") (uuid "f7c41c49-a88b-4581-9097-674c63010599"))
        (fp_line (start -7.5 7.5) (end -7.5 -7.5) (stroke (width 0.15) (type solid)) (layer "B.Fab") (uuid "38cb70f5-05b9-4bd9-b5ab-a922e6691967"))
        (fp_line (start 7.5 -7.5) (end 7.5 7.5) (stroke (width 0.15) (type solid)) (layer "B.Fab") (uuid "c77cf756-f1e0-4e62-b940-b180d3faffdc"))
        (fp_line (start 7.5 7.5) (end -7.5 7.5) (stroke (width 0.15) (type solid)) (layer "B.Fab") (uuid "548bf129-c8cf-4dde-aea1-c436b41ea2fe"))
        (fp_text user "\${REFERENCE}" (at 0 0 ${0 + p.rot}) (layer "B.Fab") (uuid "3f1a4ad5-1b53-4237-a443-af4ba23d4c1e") (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
        (fp_text user "\${VALUE}" (at 0 8.255 ${0 + p.rot}) (layer "B.Fab") (uuid "94a8f38f-c2ac-4926-b509-0821792ec204") (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
    `
        const back_mask = `
    `
        const back_courtyard = `
    `
        const back_paste = `
    `
        const edge_cuts = `
    `
        const user_drawing = `
    `
        const user_comments = `
    `
        const user_eco1 = `
    `
        const user_eco2 = `
        (fp_line (start -6.9 6.9) (end -6.9 -6.9) (stroke (width 0.15) (type solid)) (layer "Eco2.User") (uuid "d55c1626-6e18-4d49-b69b-22c0b5e548ea"))
        (fp_line (start -6.9 6.9) (end 6.9 6.9) (stroke (width 0.15) (type solid)) (layer "Eco2.User") (uuid "0e1a266d-4cb6-46d2-89e8-47a25b3ce589"))
        (fp_line (start 6.9 -6.9) (end -6.9 -6.9) (stroke (width 0.15) (type solid)) (layer "Eco2.User") (uuid "866d6432-64e5-4f86-8e58-98052a381112"))
        (fp_line (start 6.9 -6.9) (end 6.9 6.9) (stroke (width 0.15) (type solid)) (layer "Eco2.User") (uuid "9a836794-0ee9-47b5-bd90-7418f13e4f85"))
    `
        const model = `
    `
        const standard_closing = `
            )

    `
        let final = standard_opening;
        final += front_silkscreen;
        final += front_pads;
        final += front_fabrication;
        final += front_mask;
        final += front_courtyard;
        final += front_paste;
        final += pads;
        final += back_silkscreen;
        final += back_pads;
        final += back_fabrication;
        final += back_mask;
        final += back_courtyard;
        final += back_paste;
        final += edge_cuts;
        final += user_drawing;
        final += user_comments;
        final += user_eco1;
        final += user_eco2;
        final += model;
        final += standard_closing;

        return final
    }
}
