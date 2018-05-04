UPDATE inventory 
SET name=$2
SET price=$3
SET imgUrl=$4
WHERE product_id=$1;