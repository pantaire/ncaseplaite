# Shortcuts
[Ctrl] + [A]        add child node  

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

# Scripting
## GDScript
_ready()                called when node (and children) enter the active scene  
_init()                 constructor   
_on_[node]_[signal]     für [node] muss Name eingetragen werden, z.b. _on_Asef_pressed wenn Button Asef heisst   
_process(delta)         updated Anzeige nach jedem Frame. delta ist vergangene Zeit als Kommazahl, nicht sync mit physics, läuft nach physics  
_physics_process()      läuft vor jedem physics Schritt, z.B. zur Kontrolle von Charactern, default 60times/sec, änderbar unter Physics -> Common -> Physics Fps  
new()                   generate new objects, e.g. Sprites (s = Sprite.new() add_child(s) to add a new Sprite as a child node)  
free()                  free node and its childs from tree, e.g. for deleting. Better use Node.queue_free() to delete when idle to avoid crashing  

