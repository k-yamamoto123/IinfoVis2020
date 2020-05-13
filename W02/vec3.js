class Vec3{
    constructor( x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add( v ){
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }
    sub( v ){
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }
    sum(){
        return this.x + this.y + this.z;
    }
    min(){
        if(this.x <= this.y){
            if(this.x <= this.z) return this.x;
            else return this.z;
        }
        else{
            if(this.y <= this.z) return this.y;
            else return this.z;
        }
    }
    mid(){
        if(this.x >= this.y){
            if(this.x <= this.z) return this.x;
            else if(this.y >= this.z) return this.y;
            else return this.z;
        }
        else{
            if(this.x >= this.z) return this.x;
            else if(this.y >= this.z) return this.z;
            else return this.y;
        }
    }
    max(){
        if(this.x >= this.y){
            if(this.x >= this.z) return this.x;
            else return this.z;
        }
        else{
            if(this.y >= this.z) return this.y;
            else return this.z;
        }
    }
    calcMagnitude(){
        return this.x*this.x + this.y*this.y + this.z*this.z;
    }
    calcInnerProduct( v ){
        return this.x*v.x + this.y*v.y + this.z*v.z;
    }
    calcArea( v ){
        return 0.5*(Math.sqrt(this.calcMagnitude()*v.calcMagnitude() - Math.pow(this.calcInnerProduct(v),2)));
    }
}