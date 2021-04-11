# Shortcuts
## Keyboard
[Ctrl] + [A]        add child node  
## Code Abbreviations
$Sprite             short for get_node("Sprite") 
linear_velocity     Speed and direction, is most times added by a Vector2(speed, direciton) 

# Concepts
## Groups
Nodes können zu Gruppen hinzugefügt werden, über rechtes Panel Node -> Groups -> Gruppe erstellen   
add_to_group("enemies") per Code  
kann per get_tree().call_group(groupname, function) angesprochen werden  

## Instancing Scenes
var scene = load("res://myscene.tscn") # Will load when the script is instanced.  
var scene = preload("res://myscene.tscn") # Will load when parsing the script.  
var node = scene.instance()  # scene is not yet a node before calling instance()
add_child(node)  

## Signals
Godots version of observer pattern  
sends message that other nodes can listen for and respond to them  
signal my_signal defines new signals, arguments are optional but would be placed in ()
emit_signal("my_signal", <optional variables>)\

## Paths
add points: draw counterclockwise to make things go to the inside. draw clockwise to select everything on the outside  

## Add new Objects to scene
var mob = Mob.instance()    add_child(mob)  -> new Mob instance, added as child

# Scripting
## Naming conventions
Nodes/classes       PascalCase  
variables           snake_case  
constants           ALL_CAPS  

## GDScript
_ready()                called when node (and children) enter the active scene  
_init()                 constructor   
_on_[node]_[signal]     für [node] muss Name eingetragen werden, z.b. _on_Asef_pressed wenn Button Asef heisst, Target muss Script attached haben   
_process(delta)         updated Anzeige nach jedem Frame. delta ist vergangene Zeit als Kommazahl, nicht sync mit physics, läuft nach physics  
_physics_process()      läuft vor jedem physics Schritt, z.B. zur Kontrolle von Charactern, default 60times/sec, änderbar unter Physics -> Common -> Physics Fps  
new()                   generate new objects, e.g. Sprites (s = Sprite.new() add_child(s) to add a new Sprite as a child node)  
free()                  free node and its childs from tree, e.g. for deleting. Better use Node.queue_free() to delete when idle to avoid crashing  
export var asef         shows variable in Inspector Tab, is editable there instead of "hard coded"  
set_deferred(vars)      wait to do stuff till its safe to do so, e.g. waiting to finish collision processing   
PI                      GDScript uses radians instead of degrees. Alternatives are deg2rad() oder rad2deg() to convert  


