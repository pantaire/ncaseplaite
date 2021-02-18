# Cheatsheet for Blender Hotkeys

[RC] = right click  
[LC] = left click   
[MM] = middle mouse button (scrolling wheel)  

# Access Menus  

[Shift] + [A]   open add menu (object mode only)  
[Z]             open solid/wireframe/... menu   
[Shift] + [S]   open cursor pie menu  
[F3]            open search menu  
[N]             open property menu   (menu on the right)  
[~]             open pie menu for viewport (also accesible via numpad)  

# Selecting  

[A]             Select everything / whole object   
[C]             Select circle (rightclick to select, middle mouse button to de-select)  
[Alt] + [LC]    Select loop   
[Ctrl] + [I]    Invert Selection  
[H]             Hide selected object  
[Alt] + [H]     Show hidden object  
[Alt] + [LC]    Select ring/loop  

# Object Manipulation  

[Tab]             Switch between last used modes (e.g. edit/object mode)  
[Shift] + [Z]     Switch between last used views (e.g. wireframe/solid/rendered)  
[Shift] + [D]     Duplicate object   
[Shift] + [R]     Add middle vertex, subdivide vertices   
[Ctrl] + [A]      Morph around vertex (like Scale [S])   
[Esc] / [RC]      Snap back to last position  
[S] + [Axis] [-1] Mirror object on [Axis]    
[S] + [Axis] [0]  Align object on [Axis]   

[F]             Fill distance (hook points must be selscted)  

[Ctrl] + [Num]  Add [Num] amount of subdivisions  


[G]     grab active object  
[R]     rotate active object  
[S]     scale active object  
[E]     Extrude (drag part of the object)  

[X]     delete active object  

[Ctrl] + [G]    select particles/objects, make a new collection / group them together -> used for e.g. making particles that won't look the same after being rendered  
[Ctrl] + [P]    select child, select parent (by pressing Shift) -> Ctrl P -> context menu opens, choose options  

# Vertices  
 
[Alt] + [M]     Merge Vertices (must be in edit mode)   
[K]             Knife (cut vertex)  
[K] + [Z]       Cut along midline of connecting vertices  
[K] + [Alt]     Change number of cutting points   

# Viewport/Camera  

drag corner     add window (split view)
[Numpad 1-9]    Navigate camera  
[Numpad 0]      snap in/out of camera viewpoint  
[Shift] + [F]   Fly camera (navigate with W,A,S,D) ?  
[MM] + [G]      Move Camera (camera must be selected!)  
[Alt] + [MM]    Drag to snap to next axis, click to set view center to mouse position  
[Ctrl] + [MM]   Move up/down to zoom 
[Shift] + [MM]  Drag View
[Ctrl] + [Space]    Toggle Full Screen on active window


[MM]    Drag viewpoint, click to jump to view (object mode only)  


# Cursor

[Shift] + [RC]  move cursor (the point where new objects are created)   
[Shift] + [C]   move cursor to center ( coordinates: 0,0,0)  
[Shift] + [S]   open cursor pie menu  

# Modifiers

Always apply from top down, and don't forget to apply!  


# Simulation

Cache: bring to replay to get a first overview over the simulation  
Apply changes/empty cache: Click on a setting and hit enter, cache is emptied automatically  
Bake: Set from [replay] to [modular], bake Fluid first  
move down the line and bake mesh, particles,... (must be checked to be effective)  

# Sculpting

[F]     Resize Brush  
[Ctrl]  Change Brush Direction (subtract/add), must stay pressed to take effect  

[X]     Draw Mode  
[C]     Clay Mode  
[G]     Grab Mode  

## Merging stuff  
[Ctrl] + [J]            Join Objects  
Sculptmode -> Remesh    to delete inner faces and get quads (but kindof destroys topology)  
[Ctrl] + [Shift] + [B]  join meshes, booltool must be enabled (Edit -> Preferences -> Booltool)  
                            - union: delete inner mesh  
                            - intersect: only keep middle  

# Vocabs

Dyntopo         adds/removes details on the fly, regular sculpting only affects shape of mesh  
Upres factor    adds details to simulations  