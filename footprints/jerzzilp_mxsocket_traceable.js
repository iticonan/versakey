module.exports = {
    params: {
        designator: 'S',    // change it accordingly
        traces: false,
        P1: { type: 'net', value: undefined }, // undefined, // change to undefined as needed
        P2: { type: 'net', value: undefined }, // undefined, // change to undefined as needed
    },
    body: p => {

        const get_at_coordinates = () => {
            const pattern = /\(at (-?[\d\.]*) (-?[\d\.]*) (-?[\d\.]*)\)/;
            const matches = p.at.match(pattern);
            if (matches && matches.length == 4) {
                return [parseFloat(matches[1]), parseFloat(matches[2]), parseFloat(matches[3])];
            } else {
                return null;
            }
        }

        const adjust_point = (x, y) => {
            const at_l = get_at_coordinates();
            if (at_l == null) {
                throw new Error(
                    `Could not get x and y coordinates from p.at: ${p.at}`
                );
            }
            const at_x = at_l[0];
            const at_y = at_l[1];
            const at_angle = at_l[2];
            const adj_x = at_x + x;
            const adj_y = at_y + y;

            const radians = (Math.PI / 180) * at_angle,
                cos = Math.cos(radians),
                sin = Math.sin(radians),
                nx = (cos * (adj_x - at_x)) + (sin * (adj_y - at_y)) + at_x,
                ny = (cos * (adj_y - at_y)) - (sin * (adj_x - at_x)) + at_y;

            const point_str = `${nx.toFixed(2)} ${ny.toFixed(2)}`;
            return point_str;
        }

        const segments = `
	(segment (start ${adjust_point(-5.155, -2.8)}) (end ${adjust_point(-7.56, -0.395)}) (width 0.2) (layer "F.Cu") (net 0))
	(segment (start ${adjust_point(0, -7.1)}) (end ${adjust_point(-1.81, -5.29)}) (width 0.2) (layer "F.Cu") (net 0))
	(segment (start ${adjust_point(-1.81, -5.29)}) (end ${adjust_point(-1.81, -4.395)}) (width 0.2) (layer "F.Cu") (net 0))
	(segment (start ${adjust_point(-3.405, -2.8)}) (end ${adjust_point(-5.155, -2.8)}) (width 0.2) (layer "F.Cu") (net 0))
	(segment (start ${adjust_point(-7.56, -0.395)}) (end ${adjust_point(-7.56, 2.54)}) (width 0.2) (layer "F.Cu") (net 0))
	(segment (start ${adjust_point(-1.81, -4.395)}) (end ${adjust_point(-3.405, -2.8)}) (width 0.2) (layer "F.Cu") (net 0))
	(segment (start ${adjust_point(0, -7.1)}) (end ${adjust_point(1.8, -5.3)}) (width 0.2) (layer "B.Cu") (net 0))
	(segment (start ${adjust_point(7.56, 2.54)}) (end ${adjust_point(7.6, 2.5)}) (width 0.2) (layer "B.Cu") (net 0))
	(segment (start ${adjust_point(1.8, -4.46)}) (end ${adjust_point(3.44, -2.82)}) (width 0.2) (layer "B.Cu") (net 0))
	(segment (start ${adjust_point(7.56, -0.42)}) (end ${adjust_point(5.16, -2.82)}) (width 0.2) (layer "B.Cu") (net 0))
	(segment (start ${adjust_point(7.6, 2.5)}) (end ${adjust_point(7.61, 2.5)}) (width 0.2) (layer "B.Cu") (net 0))
	(segment (start ${adjust_point(1.8, -5.3)}) (end ${adjust_point(1.8, -4.46)}) (width 0.2) (layer "B.Cu") (net 0))
	(segment (start ${adjust_point(7.56, 2.54)}) (end ${adjust_point(7.56, -0.42)}) (width 0.2) (layer "B.Cu") (net 0))
	(segment (start ${adjust_point(3.44, -2.82)}) (end ${adjust_point(5.16, -2.82)}) (width 0.2) (layer "B.Cu") (net 0))
	(segment (start ${adjust_point(6.29, -2.19)}) (end ${adjust_point(4.13, -4.35)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(6.29, 5.08)}) (end ${adjust_point(6.29, -2.19)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(4.32, -4.16)}) (end ${adjust_point(4.32, -4.495)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(5.018, 9.355)}) (end ${adjust_point(2.815, 9.355)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(0.59, 8.305)}) (end ${adjust_point(-0.56, 8.305)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(6.48, 5.085)}) (end ${adjust_point(6.48, 6.415)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(-4.21, -4.35)}) (end ${adjust_point(-4.58, -3.98)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(5.39, 7.505)}) (end ${adjust_point(5.39, 8.983)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(1.29, 9.005)}) (end ${adjust_point(0.59, 8.305)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(-0.87, 7.995)}) (end ${adjust_point(-1.46, 7.995)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(2.815, 9.355)}) (end ${adjust_point(2.465, 9.005)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(6.48, 6.415)}) (end ${adjust_point(5.39, 7.505)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(5.39, 8.983)}) (end ${adjust_point(5.018, 9.355)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(-0.56, 8.305)}) (end ${adjust_point(-0.87, 7.995)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(2.465, 9.005)}) (end ${adjust_point(1.29, 9.005)}) (width 0.2) (layer "F.Cu") (net 1))
	(segment (start ${adjust_point(-6.1, 5.085)}) (end ${adjust_point(-6.1, 5.515)}) (width 0.2) (layer "B.Cu") (net 1))
	(segment (start ${adjust_point(-6.29, -2.19)}) (end ${adjust_point(-4.13, -4.35)}) (width 0.2) (layer "B.Cu") (net 1))
	(segment (start ${adjust_point(-6.29, 5.08)}) (end ${adjust_point(-6.29, -2.19)}) (width 0.2) (layer "B.Cu") (net 1))
	(segment (start ${adjust_point(-4.13, -4.34)}) (end ${adjust_point(-4.13, -4.35)}) (width 0.2) (layer "B.Cu") (net 1))
	(segment (start ${adjust_point(-6.1, 5.515)}) (end ${adjust_point(-3.62, 7.995)}) (width 0.2) (layer "B.Cu") (net 1))
	(segment (start ${adjust_point(-6.1, 4.935)}) (end ${adjust_point(-6.39, 4.645)}) (width 0.2) (layer "B.Cu") (net 1))
        `
        const standard_opening = `(
        footprint "jerzzilp_mxsocket"
        (layer "F.Cu")
        (group "" (uuid "4414ee84-a983-4cf7-bf59-62f1ccfa5ed3") (members "04aba02a-6833-4dc2-aa54-d6db62ab7abf" "0e19a20f-8ea0-4422-970e-146c60145fc4" "4448fbc4-0d26-4f4e-91fe-684edfde2146" "666e127c-eb17-4482-9169-88f5ed5ff68d" "855282eb-4fce-4fdb-b605-1608ff4f6b90" "cb30121c-3b46-4eee-96db-067a98d6ad4f" "e4c4651e-f11b-4c1d-83ae-ae772f655e5a"))
        (group "" (uuid "bceef435-05ff-43fb-95c1-5943b05c5f09") (members "57acd94e-d07f-4092-a03e-9e8f588156a7" "5815f898-f18c-45b7-9b5c-70450bbd510e" "5b4b3925-f0aa-4f50-9c5d-914c1ce24ecc" "7e95d25c-a52e-49f2-b70e-9207bd17a010" "83742854-4eac-4e73-9354-893d35b9e554" "83bacbca-6b9e-4d7d-9155-e20b683537a4" "86960129-a630-4817-84c0-56608b72ec19" "9f4c12ea-0d88-45f0-aa10-5be67a85cf1d" "aae6b3d4-2272-498a-825d-014dda41a4ca" "b66c395a-fb22-4749-b3d4-2b58d67d55c0" "c3a89cc2-dce0-4b25-a3eb-2bd47000d79b" "df3a7087-c40e-4a9f-a04e-0453b825e34e" "f14486e9-87e5-4997-8437-67470bafd791"))
        (group "" (uuid "b738615e-d7b4-445f-85b4-d44da78436f9") (members "0ff5cbdc-88a9-4345-96fe-7061b8168761" "16b63c84-aecb-4852-92e8-137708145466" "345b4be8-1fdc-4a44-8a2d-e1e293ef7e5b" "3b9c077a-c215-44e7-9678-3f112fe5dee2" "4a2c829d-12eb-4ba0-b1ae-04fc58b965b2" "4e1f9a7f-6cbd-460e-bebe-9736b11a1f4c" "879028f4-c29a-4af9-836b-20ab2235a2c3" "903085dd-ca1a-4d38-b05b-bb5ece6b58c0" "9fc5267b-2914-4687-a26d-e93b7b4fae55" "a3f83c71-6fd3-47bb-9697-05a59b73ba0d" "b9a86b3e-90d2-4ae1-bc6e-17bdd1dc6967" "c417bef6-5d7d-4964-be20-2d426c59e49d" "f6b3f15e-d95b-4697-8de2-fb6205b9f773"))
        (group "" (uuid "df2f198e-c3c2-4676-a482-28e1c479c3df") (members "0c928165-5b8d-4ca2-9800-3b6f6079dce1" "1332c9e5-2984-4dbe-ad7b-5d1e944a9e92" "2981d3e9-d8a2-4636-a161-cbc5adbf9d94" "41fee267-105e-435c-a600-81e0563476e0" "495f29b6-e7c1-43e4-8d55-a3915be30aa2" "922fea5d-1c8f-47de-9f53-15dd94eadf59" "b2b6dd30-2462-4f36-b992-baefaec89803" "ce2ab45b-c1aa-4bf5-9bed-4d83bc365277" "dfbfd332-ebbe-4057-bd27-2c579509b841" "ec7e179f-a5a7-499e-a479-c8cac318dbbf"))
        (group "" (uuid "821e0c2f-b20b-4c4b-95f8-ab0802cb2234") (members "1bbd7ee7-03b3-49be-ae04-a1b9cf214734" "2d2d35f9-3458-482f-9ff5-916948b5ea7a" "444f4a43-d6d5-46b1-9554-59bf9c2c06ed" "5f64fc69-64ad-4050-a11a-96117ad2a4e5" "68c337fc-3abb-463b-be50-8d2686356c39" "ac8c7398-53cf-46c2-bd3d-03b344540ebd" "b2c2b2fb-78f9-4729-9cb5-872dc0972bef" "b3854ce1-19ed-4add-afd6-5db32c612d45" "b9c530bb-65aa-4b1e-a93c-5efc837a681d" "da3a78ef-3fba-44cf-b8c4-4c5e2b386afe"))
        ${p.at /* parametric position */}
    `
        const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0 -8.5 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS") (hide yes) (uuid "70186eba-dcad-4878-bf16-887f6eee49df") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -7.5 -7.5) (end -7.5 -6) (stroke (width 0.14) (type solid)) (layer "F.SilkS") (uuid "37a423bc-f22b-4f78-8391-c64cc41bfdd6"))
        (fp_line (start -7.5 -7.5) (end -6 -7.5) (stroke (width 0.14) (type solid)) (layer "F.SilkS") (uuid "e3401cc1-8833-4b9f-9419-4adbb09db133"))
        (fp_line (start -7.5 7.5) (end -7.5 6) (stroke (width 0.14) (type solid)) (layer "F.SilkS") (uuid "0ceef4c0-1081-4e21-b370-88a8d72ec333"))
        (fp_line (start -7.5 7.5) (end -6 7.5) (stroke (width 0.14) (type solid)) (layer "F.SilkS") (uuid "0e3aa148-4292-4380-9408-1e897be8da4f"))
        (fp_line (start -6.1 0.9) (end -6.1 1.3) (stroke (width 0.1) (type default)) (layer "F.SilkS") (uuid "4a2c829d-12eb-4ba0-b1ae-04fc58b965b2"))
        (fp_line (start -6.1 0.9) (end -4.8 0.900001) (stroke (width 0.1) (type default)) (layer "F.SilkS") (uuid "4e1f9a7f-6cbd-460e-bebe-9736b11a1f4c"))
        (fp_line (start -6.1 3.8) (end -6.1 4.7) (stroke (width 0.1) (type default)) (layer "F.SilkS") (uuid "a3f83c71-6fd3-47bb-9697-05a59b73ba0d"))
        (fp_line (start -4.1 6.7) (end 1.4 6.7) (stroke (width 0.1) (type default)) (layer "F.SilkS") (uuid "903085dd-ca1a-4d38-b05b-bb5ece6b58c0"))
        (fp_line (start 3.7 6.7) (end 4.8 6.7) (stroke (width 0.1) (type default)) (layer "F.SilkS") (uuid "c417bef6-5d7d-4964-be20-2d426c59e49d"))
        (fp_line (start 4.3 2.8) (end 0.2 2.8) (stroke (width 0.1) (type default)) (layer "F.SilkS") (uuid "f6b3f15e-d95b-4697-8de2-fb6205b9f773"))
        (fp_line (start 4.8 3.8) (end 4.8 3.3) (stroke (width 0.1) (type default)) (layer "F.SilkS") (uuid "b9a86b3e-90d2-4ae1-bc6e-17bdd1dc6967"))
        (fp_line (start 4.8 6.7) (end 4.8 6.3) (stroke (width 0.1) (type default)) (layer "F.SilkS") (uuid "3b9c077a-c215-44e7-9678-3f112fe5dee2"))
        (fp_line (start 7.5 -7.5) (end 6 -7.5) (stroke (width 0.14) (type solid)) (layer "F.SilkS") (uuid "fed927fe-eafb-4471-ac5d-756725ea174d"))
        (fp_line (start 7.5 -7.5) (end 7.5 -6) (stroke (width 0.14) (type solid)) (layer "F.SilkS") (uuid "51854738-fa9c-4052-b2b8-d2dde367270a"))
        (fp_line (start 7.5 7.5) (end 6 7.5) (stroke (width 0.14) (type solid)) (layer "F.SilkS") (uuid "6e9efc33-f983-4f3b-8a53-1b607511aaf7"))
        (fp_line (start 7.5 7.5) (end 7.5 6.5) (stroke (width 0.14) (type solid)) (layer "F.SilkS") (uuid "91686bb5-7a82-42fb-9000-db29e45a41fa"))
        (fp_arc (start -4.1 6.7) (mid -5.514214 6.114214) (end -6.1 4.7) (stroke (width 0.1) (type default)) (layer "F.SilkS") (uuid "0ff5cbdc-88a9-4345-96fe-7061b8168761"))
        (fp_arc (start -2.8 0.900001) (mid -2.541271 1.037629) (end -2.401036 1.294955) (stroke (width 0.1) (type default)) (layer "F.SilkS") (uuid "16b63c84-aecb-4852-92e8-137708145466"))
        (fp_arc (start -0.300049 2.796514) (mid -1.589672 2.383609) (end -2.399704 1.298499) (stroke (width 0.1) (type default)) (layer "F.SilkS") (uuid "9fc5267b-2914-4687-a26d-e93b7b4fae55"))
        (fp_arc (start 0.2 2.8) (mid -0.050035 2.79971) (end -0.300049 2.796514) (stroke (width 0.1) (type default)) (layer "F.SilkS") (uuid "879028f4-c29a-4af9-836b-20ab2235a2c3"))
        (fp_arc (start 4.3 2.8) (mid 4.653553 2.946447) (end 4.8 3.3) (stroke (width 0.1) (type default)) (layer "F.SilkS") (uuid "345b4be8-1fdc-4a44-8a2d-e1e293ef7e5b"))
    `
        const front_pads = `
        (pad "1" smd roundrect (at -7.56 2.54 ${p.rot}) (size 2.5 2.55) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.2) (uuid "f5b80352-eaf3-4612-a777-4abcba45618e") ${p.P1})
        (pad "2" smd roundrect (at 6.29 5.08 ${p.rot}) (size 2.5 2.55) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.2) (uuid "8f93bfd3-0f99-45c7-86eb-eb187e5365c9") ${p.P2})
    `
        const front_fabrication = `
        (property "Value" "jerzzilp_mxsocket" (at 0 8.5 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (hide yes) (uuid "de588ed9-a530-46f0-aa03-e0307ff72286") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "4bd2fdad-3429-4a58-bd38-38405bf50a79") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "bd5770d8-5f5a-4349-9bc0-26ad9f70a8be") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 0 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "0f50bc36-486c-44da-b51f-81803b582014") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -6.1 0.9) (end -6.1 4.7) (stroke (width 0.1) (type default)) (layer "F.Fab") (uuid "444f4a43-d6d5-46b1-9554-59bf9c2c06ed"))
        (fp_line (start -6.1 0.9) (end -2.8 0.900001) (stroke (width 0.1) (type default)) (layer "F.Fab") (uuid "ac8c7398-53cf-46c2-bd3d-03b344540ebd"))
        (fp_line (start -4.1 6.7) (end 4.8 6.7) (stroke (width 0.1) (type default)) (layer "F.Fab") (uuid "da3a78ef-3fba-44cf-b8c4-4c5e2b386afe"))
        (fp_line (start 4.3 2.8) (end 0.2 2.8) (stroke (width 0.1) (type default)) (layer "F.Fab") (uuid "5f64fc69-64ad-4050-a11a-96117ad2a4e5"))
        (fp_line (start 4.8 6.7) (end 4.8 3.3) (stroke (width 0.1) (type default)) (layer "F.Fab") (uuid "2d2d35f9-3458-482f-9ff5-916948b5ea7a"))
        (fp_rect (start -7.5 -7.5) (end 7.5 7.5) (stroke (width 0.1) (type solid)) (fill none) (layer "F.Fab") (uuid "0d0df2ac-f3f7-482e-ba7c-5f666b048a62"))
        (fp_arc (start -4.1 6.7) (mid -5.514214 6.114214) (end -6.1 4.7) (stroke (width 0.1) (type default)) (layer "F.Fab") (uuid "1bbd7ee7-03b3-49be-ae04-a1b9cf214734"))
        (fp_arc (start -2.8 0.900001) (mid -2.541271 1.037629) (end -2.401036 1.294955) (stroke (width 0.1) (type default)) (layer "F.Fab") (uuid "b3854ce1-19ed-4add-afd6-5db32c612d45"))
        (fp_arc (start -0.300049 2.796514) (mid -1.589672 2.38361) (end -2.399704 1.298499) (stroke (width 0.1) (type default)) (layer "F.Fab") (uuid "68c337fc-3abb-463b-be50-8d2686356c39"))
        (fp_arc (start 0.2 2.8) (mid -0.050035 2.79971) (end -0.300049 2.796514) (stroke (width 0.1) (type default)) (layer "F.Fab") (uuid "b2c2b2fb-78f9-4729-9cb5-872dc0972bef"))
        (fp_arc (start 4.3 2.8) (mid 4.653553 2.946447) (end 4.8 3.3) (stroke (width 0.1) (type default)) (layer "F.Fab") (uuid "b9c530bb-65aa-4b1e-a93c-5efc837a681d"))
        (fp_poly (pts (xy -2 -0.625) (xy -0.55 -0.625) (xy -0.55 -2) (xy 0.55 -2) (xy 0.55 -0.625) (xy 2 -0.625) (xy 2 0.625) (xy 0.55 0.625) (xy 0.55 2) (xy -0.55 2) (xy -0.55 0.625) (xy -2 0.625)) (stroke (width 0) (type solid)) (fill solid) (layer "F.Fab") (uuid "02daf21a-f18e-4902-94ae-b6a8f12910f7"))
        (fp_text user "\${REFERENCE}" (at 0 -8.5 ${0 + p.rot}) (unlocked yes) (layer "F.Fab") (uuid "27e3c71f-5a63-4710-8adf-b600b805ce02") (effects (font (size 1 1) (thickness 0.15))))
    `
        const front_mask = `
    `
        const front_courtyard = `
        (fp_poly (pts (xy -8.25 0.5) (xy -9.5 0.5) (xy -9.5 4.5) (xy -8.25 4.5) (xy -8.25 8.25) (xy 8.25 8.25) (xy 8.25 -8.25) (xy -8.25 -8.25)) (stroke (width 0.05) (type solid)) (fill none) (layer "F.CrtYd") (uuid "eb05d1ed-618d-4fb9-86d9-cce4db19d721"))
    `
        const front_paste = `
    `
        const pads = `
        (pad "" np_thru_hole circle (at -5.08 0 ${p.rot}) (size 1.7 1.7) (drill 1.7) (layers "*.Mask") (uuid "3019c847-3ccf-490a-9dd6-694227c3fba5"))
        (pad "" np_thru_hole circle (at -3.81 2.54 ${p.rot}) (size 3 3) (drill 3) (layers "*.Mask") (uuid "83b05bca-b324-4374-8595-a47ffe6f9a36"))
        (pad "" np_thru_hole circle (at -2.54 5.08 ${p.rot}) (size 3 3) (drill 3) (layers "*.Mask") (uuid "3f43b8cc-e232-4de4-a8bc-56a1a1c0a87a"))
        (pad "" np_thru_hole circle (at 0 0 ${p.rot}) (size 4 4) (drill 4) (layers "*.Mask") (uuid "4c069f0b-8c76-44a0-a999-7bd72a3e8dee"))
        (pad "" np_thru_hole circle (at 2.54 5.08 ${p.rot}) (size 3 3) (drill 3) (layers "*.Mask") (uuid "bcf0e2c5-aff0-4dac-9138-979649dce681"))
        (pad "" np_thru_hole circle (at 3.81 2.54 ${p.rot}) (size 3 3) (drill 3) (layers "*.Mask") (uuid "e68fac9b-3de3-4acb-9bb0-3dee3685df22"))
        (pad "" np_thru_hole circle (at 5.08 0 ${p.rot}) (size 1.7 1.7) (drill 1.7) (layers "*.Mask") (uuid "3785b88e-f652-4024-afb0-be4c22cdaea8"))
        (pad "1" thru_hole circle (at 0 -7.1 ${p.rot}) (size 1.9 1.9) (drill 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "4448fbc4-0d26-4f4e-91fe-684edfde2146") ${p.P1})
        (pad "2" thru_hole circle (at -4.13 -4.35 ${221.9 + p.rot}) (size 2 2) (drill 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "cb30121c-3b46-4eee-96db-067a98d6ad4f") ${p.P2})
        (pad "2" thru_hole circle (at 4.13 -4.35 ${221.9 + p.rot}) (size 2 2) (drill 1.5) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "04aba02a-6833-4dc2-aa54-d6db62ab7abf") ${p.P2})
    `
        const back_silkscreen = `
        (fp_line (start -7.5 -7.5) (end -7.5 -6) (stroke (width 0.14) (type solid)) (layer "B.SilkS") (uuid "18ef6ddb-426c-4ec0-a730-59267fa11f3f"))
        (fp_line (start -7.5 -7.5) (end -6 -7.5) (stroke (width 0.14) (type solid)) (layer "B.SilkS") (uuid "0a8e3b3a-5bd9-463f-ac7c-fd36ca1f6505"))
        (fp_line (start -7.5 7.5) (end -7.5 6.5) (stroke (width 0.14) (type solid)) (layer "B.SilkS") (uuid "04507827-f459-4188-979e-f763c1b5cf5b"))
        (fp_line (start -7.5 7.5) (end -6 7.5) (stroke (width 0.14) (type solid)) (layer "B.SilkS") (uuid "f383c0dc-01d8-4afc-8d5f-25765db74ee3"))
        (fp_line (start -4.8 3.8) (end -4.8 3.3) (stroke (width 0.1) (type default)) (layer "B.SilkS") (uuid "5815f898-f18c-45b7-9b5c-70450bbd510e"))
        (fp_line (start -4.8 6.7) (end -4.8 6.3) (stroke (width 0.1) (type default)) (layer "B.SilkS") (uuid "57acd94e-d07f-4092-a03e-9e8f588156a7"))
        (fp_line (start -4.3 2.8) (end -0.2 2.8) (stroke (width 0.1) (type default)) (layer "B.SilkS") (uuid "5b4b3925-f0aa-4f50-9c5d-914c1ce24ecc"))
        (fp_line (start -3.7 6.7) (end -4.8 6.7) (stroke (width 0.1) (type default)) (layer "B.SilkS") (uuid "9f4c12ea-0d88-45f0-aa10-5be67a85cf1d"))
        (fp_line (start 4.1 6.7) (end -1.4 6.7) (stroke (width 0.1) (type default)) (layer "B.SilkS") (uuid "86960129-a630-4817-84c0-56608b72ec19"))
        (fp_line (start 6.1 0.9) (end 4.8 0.900001) (stroke (width 0.1) (type default)) (layer "B.SilkS") (uuid "83bacbca-6b9e-4d7d-9155-e20b683537a4"))
        (fp_line (start 6.1 0.9) (end 6.1 1.3) (stroke (width 0.1) (type default)) (layer "B.SilkS") (uuid "aae6b3d4-2272-498a-825d-014dda41a4ca"))
        (fp_line (start 6.1 3.8) (end 6.1 4.7) (stroke (width 0.1) (type default)) (layer "B.SilkS") (uuid "83742854-4eac-4e73-9354-893d35b9e554"))
        (fp_line (start 7.5 -7.5) (end 6 -7.5) (stroke (width 0.14) (type solid)) (layer "B.SilkS") (uuid "1bc5ad1d-cf0c-45be-b3a9-d2d7e4ebe950"))
        (fp_line (start 7.5 -7.5) (end 7.5 -6) (stroke (width 0.14) (type solid)) (layer "B.SilkS") (uuid "e18a6fb2-d507-4f4f-b7f3-568a1fcc7069"))
        (fp_line (start 7.5 7.5) (end 6 7.5) (stroke (width 0.14) (type solid)) (layer "B.SilkS") (uuid "01ca894c-a089-457f-94dd-5433c161a843"))
        (fp_line (start 7.5 7.5) (end 7.5 6) (stroke (width 0.14) (type solid)) (layer "B.SilkS") (uuid "34365391-349c-4089-8e17-434a04b4df6c"))
        (fp_arc (start -4.8 3.3) (mid -4.653553 2.946447) (end -4.3 2.8) (stroke (width 0.1) (type default)) (layer "B.SilkS") (uuid "b66c395a-fb22-4749-b3d4-2b58d67d55c0"))
        (fp_arc (start 0.300049 2.796514) (mid 0.050035 2.79971) (end -0.2 2.8) (stroke (width 0.1) (type default)) (layer "B.SilkS") (uuid "df3a7087-c40e-4a9f-a04e-0453b825e34e"))
        (fp_arc (start 2.399704 1.298499) (mid 1.589672 2.383609) (end 0.300049 2.796514) (stroke (width 0.1) (type default)) (layer "B.SilkS") (uuid "7e95d25c-a52e-49f2-b70e-9207bd17a010"))
        (fp_arc (start 2.401036 1.294955) (mid 2.541271 1.037629) (end 2.8 0.900001) (stroke (width 0.1) (type default)) (layer "B.SilkS") (uuid "c3a89cc2-dce0-4b25-a3eb-2bd47000d79b"))
        (fp_arc (start 6.1 4.7) (mid 5.514214 6.114214) (end 4.1 6.7) (stroke (width 0.1) (type default)) (layer "B.SilkS") (uuid "f14486e9-87e5-4997-8437-67470bafd791"))
    `
        const back_pads = `
        (pad "" np_thru_hole circle (at -5 -1.05 ${221.9 + p.rot}) (size 1.55 1.55) (drill 1.7) (layers "F&B.Cu" "*.Mask") (uuid "0e19a20f-8ea0-4422-970e-146c60145fc4"))
        (pad "" np_thru_hole circle (at 0 -4.8 ${p.rot}) (size 2.3 2.3) (drill 2.3) (layers "F&B.Cu" "*.Mask") (uuid "e4c4651e-f11b-4c1d-83ae-ae772f655e5a"))
        (pad "" np_thru_hole circle (at 0 -1.05 ${p.rot}) (size 6.12 6.12) (drill 6.12) (layers "F&B.Cu" "*.Mask") (uuid "666e127c-eb17-4482-9169-88f5ed5ff68d"))
        (pad "" np_thru_hole circle (at 5 -1.05 ${221.9 + p.rot}) (size 1.55 1.55) (drill 1.7) (layers "F&B.Cu" "*.Mask") (uuid "855282eb-4fce-4fdb-b605-1608ff4f6b90"))
        (pad "1" smd roundrect (at 7.56 2.54 ${p.rot}) (size 2.5 2.55) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.2) (uuid "9a025d13-3f10-4480-b02b-5650c6d28ed8") ${p.P1})
        (pad "2" smd roundrect (at -6.29 5.08 ${p.rot}) (size 2.5 2.55) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.2) (uuid "a95b6208-cd25-486f-8a35-f7d7b1426174") ${p.P2})
    `
        const back_fabrication = `
        (fp_line (start -4.8 6.7) (end -4.8 3.3) (stroke (width 0.1) (type default)) (layer "B.Fab") (uuid "dfbfd332-ebbe-4057-bd27-2c579509b841"))
        (fp_line (start -4.3 2.8) (end -0.2 2.8) (stroke (width 0.1) (type default)) (layer "B.Fab") (uuid "0c928165-5b8d-4ca2-9800-3b6f6079dce1"))
        (fp_line (start 4.1 6.7) (end -4.8 6.7) (stroke (width 0.1) (type default)) (layer "B.Fab") (uuid "2981d3e9-d8a2-4636-a161-cbc5adbf9d94"))
        (fp_line (start 6.1 0.9) (end 2.8 0.900001) (stroke (width 0.1) (type default)) (layer "B.Fab") (uuid "b2b6dd30-2462-4f36-b992-baefaec89803"))
        (fp_line (start 6.1 0.9) (end 6.1 4.7) (stroke (width 0.1) (type default)) (layer "B.Fab") (uuid "ec7e179f-a5a7-499e-a479-c8cac318dbbf"))
        (fp_rect (start 7.5 -7.5) (end -7.5 7.5) (stroke (width 0.1) (type solid)) (fill none) (layer "B.Fab") (uuid "4ee078fb-cf71-45c7-92fb-75e31f79b604"))
        (fp_arc (start -4.8 3.3) (mid -4.653553 2.946447) (end -4.3 2.8) (stroke (width 0.1) (type default)) (layer "B.Fab") (uuid "495f29b6-e7c1-43e4-8d55-a3915be30aa2"))
        (fp_arc (start 0.300049 2.796514) (mid 0.050035 2.79971) (end -0.2 2.8) (stroke (width 0.1) (type default)) (layer "B.Fab") (uuid "ce2ab45b-c1aa-4bf5-9bed-4d83bc365277"))
        (fp_arc (start 2.399704 1.298499) (mid 1.589672 2.38361) (end 0.300049 2.796514) (stroke (width 0.1) (type default)) (layer "B.Fab") (uuid "922fea5d-1c8f-47de-9f53-15dd94eadf59"))
        (fp_arc (start 2.401036 1.294955) (mid 2.541271 1.037629) (end 2.8 0.900001) (stroke (width 0.1) (type default)) (layer "B.Fab") (uuid "41fee267-105e-435c-a600-81e0563476e0"))
        (fp_arc (start 6.1 4.7) (mid 5.514214 6.114214) (end 4.1 6.7) (stroke (width 0.1) (type default)) (layer "B.Fab") (uuid "1332c9e5-2984-4dbe-ad7b-5d1e944a9e92"))
    `
        const back_mask = `
    `
        const back_courtyard = `
        (fp_poly (pts (xy 8.25 0.5) (xy 9.5 0.5) (xy 9.5 4.5) (xy 8.25 4.5) (xy 8.25 8.25) (xy -8.25 8.25) (xy -8.25 -8.25) (xy 8.25 -8.25)) (stroke (width 0.05) (type solid)) (fill none) (layer "B.CrtYd") (uuid "464068b8-0a8f-4592-86eb-aab4220b0488"))
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

        if (p.traces)
            final += segments;

        return final
    }
}
