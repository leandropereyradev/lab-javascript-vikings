// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    attack() {
        super.attack()
        return this.strength
    }

    receiveDamage(damage) {
        super.receiveDamage(damage)
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }

    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(damage) {
        super.receiveDamage(damage)
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : "A Saxon has died in combat"
    }
}

// War
class War {
    vikingArmy = []
    saxonArmy = []

    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject)
    }

    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject)
    }

    // Armies Attack

    vikingAttack() {
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        saxon.receiveDamage(viking.strength) //Consultar por qué no funciona siendo que le estoy causando el daño igualado a la fuerza del vikingo

        if (saxon.health < 0) this.saxonArmy.splice(saxon)

        return saxon.receiveDamage(viking.attack());
    }

    saxonAttack() {
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        viking.receiveDamage(saxon.strength) //Consultar por qué no funciona siendo que le estoy causando el daño igualado a la fuerza del vikingo

        if (viking.health < 0) this.vikingArmy.splice(viking)

        return viking.receiveDamage(saxon.attack());
    }

    showStatus() {
        if (!this.saxonArmy.length) return "Vikings have won the war of the century!"
        if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day..."
        if (this.saxonArmy.length && this.vikingArmy.length) return "Vikings and Saxons are still in the thick of battle."

    }
}
