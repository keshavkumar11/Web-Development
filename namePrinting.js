// KESHAV

for(let i=0;i<5;i++){
    for(let k=0;k<5;k++){
        if ((i==2&&k<=2) || (i==3&&k==3) || (i==4&&k==4) || (i<=4&&k==0) || (i==0&&k==4) || (i==1&&k==3)) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    process.stdout.write("  ");

    for(let e=0;e<5;e++){
        if ((i<=4&&e==0) || (i==0&&e<=4) || (i==2&&e<=4) || (i==4&&e<=4)) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    process.stdout.write("  ");

    for(let s=0;s<5;s++){
        if ((i==0&&s<=4) || (i==1&&s==0) || (i==2&&s<=4) || (i==3&&s==4) || (i==4&&s<=4)) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    process.stdout.write("  ");

    for(let h=0;h<5;h++){
        if ((i<=4&&h==0) || (i<=4&&h==4) || (i==2&&h<=4)) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    process.stdout.write("  ");

    for(let a=0;a<5;a++){
        if ((i==0&&a==2) || (i==1&&(a==1||a==3)) || (i==2&&a<=4) || ((i>=2&&i<=4)&&(a==0||a==4))) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    process.stdout.write("  ");

    for(let v=0;v<5;v++){
        if ((i<=2&&(v==0||v==4))  || (i==3&&(v==1||v==3)) || (i==4&&v==2)) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    process.stdout.write("\n");
}

