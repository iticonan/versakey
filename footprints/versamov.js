module.exports = {
  params: {
    designator: 'X',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    P2: {type: 'net', value: 'P2'}, // undefined, // change to undefined as needed
    GND: {type: 'net', value: 'GND'}, // undefined, // change to undefined as needed
    B: {type: 'net', value: 'B'}, // undefined, // change to undefined as needed
    P1: {type: 'net', value: 'P1'}, // undefined, // change to undefined as needed
    A: {type: 'net', value: 'A'}, // undefined, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "versamov"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -0.5 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS") (uuid "22657155-996f-479c-af11-e76e27714ff4") (effects (font (size 1 1) (thickness 0.1))))
    `
    const front_pads = `
        (pad "" smd roundrect (at -8.375 -2.15 ${p.rot}) (size 2.35 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "f4f35572-d872-4f31-803e-91263d500309"))
        (pad "" smd roundrect (at -8.375 -0.56 ${p.rot}) (size 2.35 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "115081af-ab3f-42d5-a250-7207d9b722d4"))
        (pad "" smd roundrect (at -7.91875 0.775 ${p.rot}) (size 1.3625 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "41eea467-9cf5-4228-b56f-737cae7b0091"))
        (pad "" smd roundrect (at 5.7 -2.1 ${p.rot}) (size 1.2 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "e997e167-9020-4656-aeb8-265be9ae6c57"))
        (pad "" smd roundrect (at 7.84375 0.775 ${p.rot}) (size 1.2125 0.85) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "b187a54d-14a8-4336-baf7-3b16b76f4576"))
        (pad "" smd roundrect (at 8.375 -2.15 ${p.rot}) (size 2.35 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "e3eb35d6-8ef0-4e6d-b84d-fa062346b56f"))
        (pad "" smd roundrect (at 8.375 -0.56 ${p.rot}) (size 2.35 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "cbcfd2e3-a7c2-43e4-84f2-31970889856f"))
        (pad "1" smd roundrect (at -2.5 -8 ${p.rot}) (size 1.5 2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "5911a934-62d8-4dec-bf4c-a72bfbfcb45d") ${p.P1})
        (pad "2" smd roundrect (at 2.5 -8 ${p.rot}) (size 1.5 2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "19b043f8-13a9-4975-a6e6-901529227327") ${p.P2})
        (pad "A" smd roundrect (at -5.7 -2.1 ${p.rot}) (size 1.2 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "44c28858-fd09-4fbc-94b9-df918e267ca0") ${p.A})
        (pad "A" smd roundrect (at -2.5 8 ${p.rot}) (size 1.5 2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "0325b6fb-0b9f-4c7a-bc36-35e9eeea7efa") ${p.A})
        (pad "A" smd roundrect (at 7.8 -3.5 ${p.rot}) (size 1.2 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "73a3d414-3308-4cd2-bdc7-555d3972f606") ${p.A})
        (pad "B" smd roundrect (at -8.375 2.15 ${p.rot}) (size 2.35 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "1eca267a-84c9-4136-8b92-dd27f0bd8d0a") ${p.B})
        (pad "B" smd roundrect (at 2.5 8 ${p.rot}) (size 1.5 2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "4acc7bf2-1dc6-40de-8221-a7181a824823") ${p.B})
        (pad "B" smd roundrect (at 8.375 2.15 ${p.rot}) (size 2.35 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "1c0631af-9532-4f86-aedc-a83bcee73a56") ${p.B})
        (pad "GND" smd roundrect (at -7.8 -3.5 ${p.rot}) (size 1.2 1.2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "065d7967-3290-4b43-af27-e3b5ac8ad407") ${p.GND})
        (pad "GND" smd roundrect (at 0 8 ${p.rot}) (size 1.5 2) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "ce3a870e-a1c7-40a0-b74a-83f9cb64ef50") ${p.GND})
    `
    const front_fabrication = `
        (property "Value" "versamov" (at 0 1 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (uuid "d1eb6b0a-5ce9-4dfd-8ce2-ac2c03f35efd") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "d05197d9-d109-4d3c-89c6-ffe46184d258") (effects (font (size 1 1) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "cc5eeb47-bdcc-4d13-846e-014798685dd1") (effects (font (size 1 1) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "15d1ef94-4387-4ec5-95bc-013422c9415a") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -1.5 -8.2) (end 1.5 -8.2) (stroke (width 0.1) (type default)) (layer "F.Fab") (uuid "ed7d0a27-273f-4ac3-a633-8a5d392568dd"))
        (fp_circle (center 0 0) (end 4.8 0) (stroke (width 0.1) (type default)) (fill none) (layer "F.Fab") (uuid "77ac2c84-6e3b-44b3-98d4-a473b32029b5"))
        (fp_text user "\${REFERENCE}" (at 0 3.75 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (uuid "ea34be0b-d28f-408d-a6d5-71c672b79e8a") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = `
        (pad "" thru_hole roundrect (at -6.25 0 ${p.rot}) (size 2.3 2.7) (drill 1.6) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.1086956522) (uuid "772c4679-db1c-4ada-bf3a-e61721f39cfe"))
        (pad "" thru_hole circle (at -2 2.25 ${p.rot}) (size 1.4 1.4) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "96ad05e4-1c75-4f8a-ab2f-fe5b64b0c831"))
        (pad "" thru_hole circle (at 0 2.25 ${p.rot}) (size 1.4 1.4) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "c3c92b1e-d16f-4b63-ba45-720fd58ecf97"))
        (pad "" thru_hole circle (at 2 -2.25 ${p.rot}) (size 1.4 1.4) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "a0610e74-b743-4c9b-b797-a34e3fef8f22"))
        (pad "" thru_hole circle (at 2 2.25 ${p.rot}) (size 1.4 1.4) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "c08fa4a5-c3fa-48c3-a4b6-e3424ee06bb5"))
        (pad "" thru_hole roundrect (at 6.25 0 ${p.rot}) (size 2.3 2.7) (drill 1.6) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (roundrect_rratio 0.119047619) (uuid "f665c011-17ba-4462-a155-ae944920d84f"))
        (pad "1" thru_hole circle (at 0 -2.25 ${p.rot}) (size 1.4 1.4) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "164b5e7f-cb40-4311-953b-861efab18216") ${p.P1})
        (pad "2" thru_hole circle (at -2 -2.25 ${p.rot}) (size 1.4 1.4) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "0148f5bd-f3e6-4085-8636-ee709730980f") ${p.P2})
    `
    const back_silkscreen = `
    `
    const back_pads = `
        (pad "" smd roundrect (at -8.375 -2.15 ${p.rot}) (size 2.35 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "281e27af-7d02-4b57-ae7a-4fe72f121c23"))
        (pad "" smd roundrect (at -8.375 -0.56 ${p.rot}) (size 2.35 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "4c49a203-3931-4c66-8632-04983c710d37"))
        (pad "" smd roundrect (at -7.91875 0.775 ${p.rot}) (size 1.3625 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "232332bb-8b26-4bb9-b1af-c719959e93d6"))
        (pad "" smd roundrect (at -5.7 -2.1 ${p.rot}) (size 1.2 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "ea9f436d-20f5-4e29-863c-b9833f710a17"))
        (pad "" np_thru_hole circle (at -5.6 -5.6 ${p.rot}) (size 0.8 0.8) (drill 0.8) (layers "F&B.Cu" "*.Mask") (uuid "cc3980d5-ac79-400a-bba5-8c2f973cd31e"))
        (pad "" np_thru_hole circle (at -5.6 5.6 ${p.rot}) (size 0.8 0.8) (drill 0.8) (layers "F&B.Cu" "*.Mask") (uuid "6fb24abc-0003-4872-8ecb-c3f17bbde7f7"))
        (pad "" np_thru_hole circle (at -2 0 ${p.rot}) (size 1.2 1.2) (drill 1.2) (layers "F&B.Cu" "*.Mask") (uuid "06e31a34-7ad0-4d5d-99cf-021a7da02007"))
        (pad "" np_thru_hole circle (at 2 0 ${p.rot}) (size 1.2 1.2) (drill 1.2) (layers "F&B.Cu" "*.Mask") (uuid "309d9a32-69e4-4a7c-a836-dcd376e32095"))
        (pad "" np_thru_hole circle (at 5.6 -5.6 ${p.rot}) (size 0.8 0.8) (drill 0.8) (layers "F&B.Cu" "*.Mask") (uuid "f2ea69d9-2ccf-45ed-981d-00f19bf9edcb"))
        (pad "" np_thru_hole circle (at 5.6 5.6 ${p.rot}) (size 0.8 0.8) (drill 0.8) (layers "F&B.Cu" "*.Mask") (uuid "79320cf7-3ab4-474f-972e-20c1b4230e91"))
        (pad "" smd roundrect (at 7.84375 0.775 ${p.rot}) (size 1.2125 0.85) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "290ad8c3-d25e-4718-af7e-98ae793536f8"))
        (pad "" smd roundrect (at 8.375 -2.15 ${p.rot}) (size 2.35 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "5e8f4f73-e93b-4a84-9d54-904a81aeb1a6"))
        (pad "" smd roundrect (at 8.375 -0.56 ${p.rot}) (size 2.35 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "8eb7a8e0-4a3b-4336-b60d-7a422e2a41e9"))
        (pad "1" smd roundrect (at 2.5 -8 ${p.rot}) (size 1.5 2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "ed2d1d26-e5e0-497d-a30d-0c8bd2e5464f") ${p.P1})
        (pad "2" smd roundrect (at -2.5 -8 ${p.rot}) (size 1.5 2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "12728ead-cfd2-4d79-8c38-d94ef82afe32") ${p.P2})
        (pad "A" smd roundrect (at -7.8 -3.5 ${p.rot}) (size 1.2 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "1afa5c5e-aa7a-4d67-b203-b6dd98ef95fd") ${p.A})
        (pad "A" smd roundrect (at 2.5 8 ${p.rot}) (size 1.5 2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "695e0b1e-8f30-480b-b976-dc2111beb9d7") ${p.A})
        (pad "A" smd roundrect (at 5.7 -2.1 ${p.rot}) (size 1.2 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "269fe2fd-018f-4c1a-8d93-e43d496f82c3") ${p.A})
        (pad "B" smd roundrect (at -8.375 2.15 ${p.rot}) (size 2.35 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "92b95877-11a5-48bb-807a-dfe02d21848f") ${p.B})
        (pad "B" smd roundrect (at -2.5 8 ${p.rot}) (size 1.5 2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "fcef56c4-558b-4584-af32-b05811deae24") ${p.B})
        (pad "B" smd roundrect (at 8.375 2.15 ${p.rot}) (size 2.35 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "9379f880-9cc1-4618-ae37-2c8c6dc14558") ${p.B})
        (pad "GND" smd roundrect (at 0 8 ${p.rot}) (size 1.5 2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "a41b2926-2731-4cd9-8b0c-2a897bdf814d") ${p.GND})
        (pad "GND" smd roundrect (at 7.8 -3.5 ${p.rot}) (size 1.2 1.2) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) (thermal_bridge_angle 45) (uuid "32461dc3-19b2-4570-a48e-d450bf53a49b") ${p.GND})
    `
    const back_fabrication = `
    `
    const back_mask = `
        (fp_rect (start -6 -6) (end 6 6) (stroke (width 0.1) (type default)) (fill none) (layer "B.Mask") (uuid "42be2c74-8246-4e89-b8f2-9ae8267a2f98"))
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