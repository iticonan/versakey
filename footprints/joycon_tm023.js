module.exports = {
  params: {
    designator: 'X',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    GND: {type: 'net', value: 'GND'}, // undefined, // change to undefined as needed
    A2: {type: 'net', value: 'A2'}, // undefined, // change to undefined as needed
    VCC: {type: 'net', value: 'VCC'}, // undefined, // change to undefined as needed
    A1: {type: 'net', value: 'A1'}, // undefined, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "joycon_tm023"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (attr smd)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -0.5 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS") (uuid "2bf1ae7a-1769-4674-a052-57d61421188f") (effects (font (size 1 1) (thickness 0.1))))
    `
    const front_pads = `
        (pad "" smd custom (at -6.1 8.55 ${270 + p.rot}) (size 0.2 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 -0.625) (xy 0.5 -0.625) (xy 0.5 0.625) (xy -0.65 0.625) (xy -0.15 0)) (width 0) (fill yes))) (uuid "05e01361-a573-48eb-b075-a83cd89f936f"))
        (pad "" smd custom (at -3.95 8.55 ${270 + p.rot}) (size 0.2 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 -0.625) (xy 0.5 -0.625) (xy 0.5 0.625) (xy -0.65 0.625) (xy -0.15 0)) (width 0) (fill yes))) (uuid "2913021f-89ff-4573-950b-f815f400631c"))
        (pad "" smd custom (at -3.949999 7.825 ${270 + p.rot}) (size 0.2 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 -0.625) (xy -0.25 -0.625) (xy 0.25 0) (xy -0.25 0.625) (xy -0.5 0.625)) (width 0) (fill yes))) (uuid "4f4b23c3-6ecb-4bea-b1c1-a24a6be2c2b8"))
        (pad "" smd custom (at -2 8.55 ${270 + p.rot}) (size 0.2 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 -0.625) (xy 0.5 -0.625) (xy 0.5 0.625) (xy -0.65 0.625) (xy -0.15 0)) (width 0) (fill yes))) (uuid "97138f6d-ef68-4b0e-b8e0-976f16220f1f"))
        (pad "" smd custom (at 0 8.55 ${270 + p.rot}) (size 0.2 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 -0.625) (xy 0.5 -0.625) (xy 0.5 0.625) (xy -0.65 0.625) (xy -0.15 0)) (width 0) (fill yes))) (uuid "5f8d3cd4-14e2-4a1f-b7bf-0e887ceae41e"))
        (pad "" smd custom (at 2 8.55 ${270 + p.rot}) (size 0.2 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 -0.625) (xy 0.5 -0.625) (xy 0.5 0.625) (xy -0.65 0.625) (xy -0.15 0)) (width 0) (fill yes))) (uuid "4c0e7a7e-f4cd-47ce-8c79-93f7f0b8e1c2"))
        (pad "" smd custom (at 3.95 8.55 ${270 + p.rot}) (size 0.2 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 -0.625) (xy 0.5 -0.625) (xy 0.5 0.625) (xy -0.65 0.625) (xy -0.15 0)) (width 0) (fill yes))) (uuid "aeb59d13-2cfd-4502-9ebd-d9d323488a07"))
        (pad "" smd custom (at 3.950001 7.825 ${270 + p.rot}) (size 0.2 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 -0.625) (xy -0.25 -0.625) (xy 0.25 0) (xy -0.25 0.625) (xy -0.5 0.625)) (width 0) (fill yes))) (uuid "2ba7aaec-4e55-4e54-9e0f-ed1b7ed8bb09"))
        (pad "" smd custom (at 5.95 8.55 ${270 + p.rot}) (size 0.2 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 -0.625) (xy 0.5 -0.625) (xy 0.5 0.625) (xy -0.65 0.625) (xy -0.15 0)) (width 0) (fill yes))) (uuid "314cbcb0-ac1e-43d7-8a91-17052585473a"))
        (pad "" smd custom (at 5.950001 7.825 ${270 + p.rot}) (size 0.2 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 -0.625) (xy -0.25 -0.625) (xy 0.25 0) (xy -0.25 0.625) (xy -0.5 0.625)) (width 0) (fill yes))) (uuid "4061c777-509c-4861-b496-9c69d1721935"))
        (pad "A1" smd custom (at 0.000001 7.825 ${270 + p.rot}) (size 0.2 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 -0.625) (xy -0.25 -0.625) (xy 0.25 0) (xy -0.25 0.625) (xy -0.5 0.625)) (width 0) (fill yes))) (uuid "9105c86f-67e7-4dc9-9f7a-d289debfab8e") ${p.A1})
        (pad "A2" smd custom (at -1.999999 7.825 ${270 + p.rot}) (size 0.2 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 -0.625) (xy -0.25 -0.625) (xy 0.25 0) (xy -0.25 0.625) (xy -0.5 0.625)) (width 0) (fill yes))) (uuid "e34dc79d-8d71-48d1-8360-58ea9cabf11e") ${p.A2})
        (pad "GND" smd custom (at -6.099999 7.825 ${270 + p.rot}) (size 0.2 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 -0.625) (xy -0.25 -0.625) (xy 0.25 0) (xy -0.25 0.625) (xy -0.5 0.625)) (width 0) (fill yes))) (uuid "8218973d-5918-4cda-aadd-72ec446a6ef3") ${p.GND})
        (pad "VCC" smd custom (at 2.000001 7.825 ${270 + p.rot}) (size 0.2 0.2) (layers "F.Cu" "F.Paste" "F.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 -0.625) (xy -0.25 -0.625) (xy 0.25 0) (xy -0.25 0.625) (xy -0.5 0.625)) (width 0) (fill yes))) (uuid "5529afac-9787-4d76-92e5-9a9cd8819545") ${p.VCC})
    `
    const front_fabrication = `
        (property "Value" "joycon_tm023" (at 0 1 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (uuid "e3209b51-e7bb-48d8-89e9-e5759ece6069") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "13f8badd-f66d-4a6f-9b8e-ae8781c3ec7e") (effects (font (size 1 1) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "5616a36c-78a0-4e59-b3c4-8b22e1ad7412") (effects (font (size 1 1) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "fee26b53-7fce-4ddd-9fdf-efd8163ffdef") (effects (font (size 1 1) (thickness 0.15))))
        (fp_circle (center 0 0) (end 7.5 0) (stroke (width 0.1) (type default)) (fill none) (layer "F.Fab") (uuid "dc6aded3-f736-423b-9271-dd8801ddbead"))
        (fp_text user "\${REFERENCE}" (at 0 2.5 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (uuid "8c955294-afde-40f7-a9ee-264e3d32f8e9") (effects (font (size 1 1) (thickness 0.15))))
    `
    const front_mask = `
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = `
        (pad "" thru_hole circle (at -6.1 8.85 ${270 + p.rot}) (size 0.8 0.8) (drill 0.5) (layers "*.Cu" "*.Mask" "F.SilkS") (remove_unused_layers no) (uuid "7c1bf1ba-bdd4-46a5-99d6-84ecbad10150"))
        (pad "" thru_hole circle (at -6 10.5 ${p.rot}) (size 1.3 1.3) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "52457559-d274-4b66-8805-4e6dc26d2f95"))
        (pad "" thru_hole circle (at -4 10.5 ${p.rot}) (size 1.3 1.3) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "b453563c-6b43-41ac-8094-ca7451884849"))
        (pad "" thru_hole circle (at -3.95 8.85 ${270 + p.rot}) (size 0.8 0.8) (drill 0.5) (layers "*.Cu" "*.Mask" "F.SilkS") (remove_unused_layers no) (uuid "6568860e-6d6b-4f63-8626-0bd7a6d43571"))
        (pad "" thru_hole circle (at -2 8.85 ${270 + p.rot}) (size 0.8 0.8) (drill 0.5) (layers "*.Cu" "*.Mask" "F.SilkS") (remove_unused_layers no) (uuid "e24fd6f7-7c56-42fd-aed5-653f44b054d7"))
        (pad "" thru_hole circle (at -2 10.5 ${p.rot}) (size 1.3 1.3) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "1d6c326e-840b-48c0-945d-30612139db8a"))
        (pad "" thru_hole circle (at 0 8.85 ${270 + p.rot}) (size 0.8 0.8) (drill 0.5) (layers "*.Cu" "*.Mask" "F.SilkS") (remove_unused_layers no) (uuid "6f45bb68-625c-4c1a-8653-771516ba3d0d"))
        (pad "" thru_hole circle (at 0 10.5 ${90 + p.rot}) (size 1.3 1.3) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "fd2859ca-73f0-41e4-affd-3fc98ade5b0a"))
        (pad "" thru_hole circle (at 2 8.85 ${270 + p.rot}) (size 0.8 0.8) (drill 0.5) (layers "*.Cu" "*.Mask" "F.SilkS") (remove_unused_layers no) (uuid "564f5b18-ccef-4d7e-85e2-4698fc41570c"))
        (pad "" thru_hole circle (at 2 10.5 ${p.rot}) (size 1.3 1.3) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "2bf20f31-da30-405a-8b82-69bb442ae44e"))
        (pad "" thru_hole circle (at 3.95 8.85 ${270 + p.rot}) (size 0.8 0.8) (drill 0.5) (layers "*.Cu" "*.Mask" "F.SilkS") (remove_unused_layers no) (uuid "34621438-3239-40ef-aa61-1d94d77fc10d"))
        (pad "" thru_hole circle (at 4 10.5 ${p.rot}) (size 1.3 1.3) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "53b7be84-1cdb-4675-8e02-c2dd8fd3d116"))
        (pad "" thru_hole circle (at 5.95 8.85 ${270 + p.rot}) (size 0.8 0.8) (drill 0.5) (layers "*.Cu" "*.Mask" "F.SilkS") (remove_unused_layers no) (uuid "7154cd61-c74f-41d6-a90f-a2dcadb1c9fe"))
        (pad "" thru_hole circle (at 6 10.5 ${p.rot}) (size 1.3 1.3) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "e3d07bb0-5460-4673-b560-baf765656634"))
    `
    const back_silkscreen = `
    `
    const back_pads = `
        (pad "" np_thru_hole oval (at -7.25 0 ${p.rot}) (size 1.4 2) (drill oval 1.1 1.7) (layers "F&B.Cu" "*.Mask") (thermal_bridge_angle 45) (uuid "7744cf3d-0547-4685-848b-c46acb99eb56"))
        (pad "" smd custom (at -6.1 8.55 ${270 + p.rot}) (size 0.2 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 0.625) (xy 0.5 0.625) (xy 0.5 -0.625) (xy -0.65 -0.625) (xy -0.15 0)) (width 0) (fill yes))) (uuid "5716210a-4c15-4b1c-ac58-efde248e2d30"))
        (pad "" smd custom (at -6.099999 7.825 ${270 + p.rot}) (size 0.2 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 0.625) (xy -0.25 0.625) (xy 0.25 0) (xy -0.25 -0.625) (xy -0.5 -0.625)) (width 0) (fill yes))) (uuid "4265f7c5-af6f-4899-b54e-f5e779e73976"))
        (pad "" smd custom (at -3.95 8.55 ${270 + p.rot}) (size 0.2 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 0.625) (xy 0.5 0.625) (xy 0.5 -0.625) (xy -0.65 -0.625) (xy -0.15 0)) (width 0) (fill yes))) (uuid "a6dae4ee-e127-4725-97e4-3c3ac838f5f8"))
        (pad "" smd custom (at -3.949999 7.825 ${270 + p.rot}) (size 0.2 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 0.625) (xy -0.25 0.625) (xy 0.25 0) (xy -0.25 -0.625) (xy -0.5 -0.625)) (width 0) (fill yes))) (uuid "1c922659-4ad9-4649-93a1-d87d49f56af3"))
        (pad "" smd custom (at -2 8.55 ${270 + p.rot}) (size 0.2 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 0.625) (xy 0.5 0.625) (xy 0.5 -0.625) (xy -0.65 -0.625) (xy -0.15 0)) (width 0) (fill yes))) (uuid "ddea58a8-9fe3-4616-a558-37d2c592f2a8"))
        (pad "" np_thru_hole oval (at 0 -7.55 ${p.rot}) (size 2.5 0.9) (drill oval 2.2 0.6) (layers "F&B.Cu" "*.Mask") (thermal_bridge_angle 45) (uuid "b381fbe1-d2e6-4339-a00c-66c07f398792"))
        (pad "" smd custom (at 0 8.55 ${270 + p.rot}) (size 0.2 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 0.625) (xy 0.5 0.625) (xy 0.5 -0.625) (xy -0.65 -0.625) (xy -0.15 0)) (width 0) (fill yes))) (uuid "097cb7eb-4e1d-40d3-bc80-2ffd7ab3689b"))
        (pad "" smd custom (at 2 8.55 ${270 + p.rot}) (size 0.2 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 0.625) (xy 0.5 0.625) (xy 0.5 -0.625) (xy -0.65 -0.625) (xy -0.15 0)) (width 0) (fill yes))) (uuid "414e491d-0ad9-4e3c-839a-935e5881a3f8"))
        (pad "" smd custom (at 3.95 8.55 ${270 + p.rot}) (size 0.2 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 0.625) (xy 0.5 0.625) (xy 0.5 -0.625) (xy -0.65 -0.625) (xy -0.15 0)) (width 0) (fill yes))) (uuid "eff7d89f-9129-42c6-927d-d87dc063f50c"))
        (pad "" smd custom (at 3.950001 7.825 ${270 + p.rot}) (size 0.2 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 0.625) (xy -0.25 0.625) (xy 0.25 0) (xy -0.25 -0.625) (xy -0.5 -0.625)) (width 0) (fill yes))) (uuid "e1e9d6e3-0b1e-4abe-9aec-0929e7aeb8dc"))
        (pad "" smd custom (at 5.95 8.55 ${270 + p.rot}) (size 0.2 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 0.625) (xy 0.5 0.625) (xy 0.5 -0.625) (xy -0.65 -0.625) (xy -0.15 0)) (width 0) (fill yes))) (uuid "51ce30ce-75b0-47c6-afe4-b7a639f93b4e"))
        (pad "" np_thru_hole oval (at 7.25 0 ${p.rot}) (size 1.4 2) (drill oval 1.1 1.7) (layers "F&B.Cu" "*.Mask") (thermal_bridge_angle 45) (uuid "7b05ebfb-4986-41a6-9426-cd93735191f9"))
        (pad "A1" smd custom (at 0.000001 7.825 ${270 + p.rot}) (size 0.2 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 0.625) (xy -0.25 0.625) (xy 0.25 0) (xy -0.25 -0.625) (xy -0.5 -0.625)) (width 0) (fill yes))) (uuid "c5697937-9327-4611-9255-93f881ebc08b") ${p.A1})
        (pad "A2" smd custom (at 2.000001 7.825 ${270 + p.rot}) (size 0.2 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 0.625) (xy -0.25 0.625) (xy 0.25 0) (xy -0.25 -0.625) (xy -0.5 -0.625)) (width 0) (fill yes))) (uuid "0d5c0a13-c854-486e-9250-82015e6cbaa1") ${p.A2})
        (pad "GND" smd custom (at 5.950001 7.825 ${270 + p.rot}) (size 0.2 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 0.625) (xy -0.25 0.625) (xy 0.25 0) (xy -0.25 -0.625) (xy -0.5 -0.625)) (width 0) (fill yes))) (uuid "0d97a92a-28c0-4fd6-94bd-013de3f2bf82") ${p.GND})
        (pad "VCC" smd custom (at -1.999999 7.825 ${270 + p.rot}) (size 0.2 0.2) (layers "B.Cu" "B.Paste" "B.Mask") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 0.625) (xy -0.25 0.625) (xy 0.25 0) (xy -0.25 -0.625) (xy -0.5 -0.625)) (width 0) (fill yes))) (uuid "2d8c8f1d-1a94-4d5d-a7b1-38631982f78c") ${p.VCC})
    `
    const back_fabrication = `
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