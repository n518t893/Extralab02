<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplication Table</title>
    <style>
        table {
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
        }
    </style>
</head>
<body>
    <h1>Multiplication Table</h1>
    <p><a href="practice4.html" class="button">Back to generate table</a></p>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["number"])) {
        $number = intval($_POST["number"]);
        echo "<table>";
        echo "<tr><th></th>"; // Empty cell for the top-left corner
        for ($i = 1; $i <= $number; $i++) {
            echo "<th>$i</th>"; // Column indexes
        }
        echo "</tr>";
        for ($i = 1; $i <= $number; $i++) {
            echo "<tr>";
            echo "<th>$i</th>"; // Row indexes
            for ($j = 1; $j <= $number; $j++) {
                echo "<td>" . ($i * $j) . "</td>"; // Multiplication result
            }
            echo "</tr>";
        }
        echo "</table>";
    }
    ?>

</body>
</html>
